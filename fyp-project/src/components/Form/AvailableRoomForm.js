import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';



const AvailableRoomForm = () => {
  // State to hold the data for each dropdown
  const [springFallOptions, setSpringFallOptions] = useState([]);
  const [yearOptions, setYearOptions] = useState([]);
  const [roomNumberOptions, setRoomNumberOptions] = useState([]);
  // const [departmentOptions, setDepartmentOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data for dropdowns when the component mounts
  useEffect(() => {
    const fetchCS = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/api/adminPanel/availableRooms/getcsid', {
          headers: { token },
        });
        setSpringFallOptions(response.data); // Set the fetched data to departments
        setYearOptions(response.data) ; 
      } catch (error) {
        console.error('Error fetching springFall year:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCS(); // Call the function
  }, []);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/api/adminPanel/availableRooms/getroomids', {
          headers: { token },
        });
        setRoomNumberOptions(response.data); // Set the fetched data to departments
        // setDepartmentOptions(response.data);
      } catch (error) {
        console.error('Error fetching departments and rooms', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms(); // Call the function
  }, []);


  // Validation schema for Formik
  const validationSchema = Yup.object({
    springFall: Yup.string().required('SpringFall is required'),
    year: Yup.number().required('Year is required'),
    room_number: Yup.string().required('Room_Number is required'),
    // department: Yup.string().required('Department is required'),
    start_time: Yup.number().required('Start time is required'),
    end_time: Yup.number().required('End time is required'),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log('Form values', values);
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No authentication token found.');
      return;
    }

    try {
      // API call to add a course
      const response = await fetch('  http://localhost:3001/api/adminPanel/availableRooms/addavailablerooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          token: token,
        },
        body: JSON.stringify(values), // Sends form data including department_name
      });

      if (response.ok) {
        console.log('Available Room  added successfully');
        resetForm(); // Reset form on success
      } else {
        console.error('Failed to add Available Room');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ springFall: '', year: '', room_number: '', start_time: '', end_time: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({values, handleChange, errors, touched, isSubmitting}) => (
        <Form>
          <Box sx={{ maxWidth: 500, margin: '0 auto' }}>
            <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>Add Available Rooms</Typography>

            <FormControl fullWidth margin="normal" error={touched.springFall && !!errors.springFall}>
                <InputLabel>SprinFall</InputLabel>
                <Select
                  name="springFall"
                  value={values.springFall}
                  onChange={handleChange}
                  label="springFall"
                  disabled={loading} // Disable while loading data
                >
                  {loading ? (
                    <MenuItem value="">Loading...</MenuItem> // Show loading option
                  ) : (
                    springFallOptions.map((springfall, index) => (
                      <MenuItem key={index} value={springfall.springFall}>
                        {springfall.springFall}
                      </MenuItem>
                    ))
                  )}
                </Select>
                {touched.springFall && errors.springFall && (
                  <FormHelperText>{errors.springFall}</FormHelperText>
                )}
              </FormControl>

            <FormControl fullWidth margin="normal" error={touched.year && !!errors.year}>
              <InputLabel>Year</InputLabel>
              <Field
                name="year"
                as={Select}
                label="Year"
                fullWidth
              >
                {yearOptions.map((Year, index) => (
                  <MenuItem key={index} value={Year.year}>
                    {Year.year}
                  </MenuItem>
                )
              )}
              </Field>
              {touched.year && errors.year && (
                <Typography variant="body2" color="error">
                  {errors.year}
                </Typography>
              )}
            </FormControl>

            <FormControl fullWidth margin="normal" error={touched.room_number && !!errors.room_number}>
              <InputLabel>Room Number</InputLabel>
              <Field
                name="room_number"
                as={Select}
                label="Room Number"
                fullWidth
              >
                {roomNumberOptions.map((room, index) => (
                  <MenuItem key={index} value={room.room_number}>
                    {room.room_number}
                  </MenuItem>
                ))}
              </Field>
              {touched.room_number && errors.room_number && (
                <Typography variant="body2" color="error">
                  {errors.room_number}
                </Typography>
              )}
            </FormControl>

            {/* <FormControl fullWidth margin="normal" error={touched.department && !!errors.department}>
              <InputLabel>Department</InputLabel>
              <Field
                name="department"
                as={Select}
                label="Department"
                fullWidth
              >
                {departmentOptions.map((dept, index) => (
                  <MenuItem key={index} value={dept.department}>
                    {dept.department}
                  </MenuItem>
                ))}
              </Field>
              {touched.department && errors.department && (
                <Typography variant="body2" color="error">
                  {errors.department}
                </Typography>
              )}
            </FormControl> */}

            <Field
              as={TextField}
              name="start_time"
              label="Start Time"
              fullWidth
              margin="normal"
              error={touched.start_time && !!errors.start_time}
              helperText={touched.start_time && errors.start_time}
            />
            <Field
              as={TextField}
              name="end_time"
              label="End Time"
              fullWidth
              margin="normal"
              error={touched.end_time && !!errors.end_time}
              helperText={touched.end_time && errors.end_time}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              sx={{
                mt: 2,
                backgroundColor: 'black',
                '&:hover': {
                  backgroundColor: 'black',
                  color: 'white'
                }
              }}
            >
              Add Available Rooms
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default AvailableRoomForm;
