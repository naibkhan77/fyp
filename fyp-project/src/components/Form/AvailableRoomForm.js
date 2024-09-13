import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Box, Button, Typography, MenuItem, Select, InputLabel, FormControl, TextField } from '@mui/material';

const AvailableRoomForm = () => {
  // State to hold the data for each dropdown
  const [springFallOptions, setSpringFallOptions] = useState([]);
  const [yearOptions, setYearOptions] = useState([]);
  const [roomNumberOptions, setRoomNumberOptions] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);

  // Fetch data for dropdowns when the component mounts
  useEffect(() => {
    // Fetch SpringFall and Year options
    axios.get('http://localhost:3001/api/adminPanel/availableRooms/getcsid')
      .then(response => {
        // Assuming the response contains both SpringFall and Year options
        setSpringFallOptions(response.data.springFallOptions);
        setYearOptions(response.data.yearOptions);
      })
      .catch(error => console.error('Error fetching SpringFall and Year options:', error));

    // Fetch Room Number and Department options
    axios.get('http://localhost:3001/api/adminPanel/availableRooms/getroomids')
      .then(response => {
        setRoomNumberOptions(response.data.roomNumberOptions);
        setDepartmentOptions(response.data.departmentOptions);
      })
      .catch(error => console.error('Error fetching Room Number and Department options:', error));
  }, []);

  // Validation schema for Formik
  const validationSchema = Yup.object({
    SpringFall: Yup.string().required('SpringFall is required'),
    Year: Yup.number().required('Year is required'),
    Room_Number: Yup.number().required('Room_Number is required'),
    Department: Yup.string().required('Department is required'),
    start_time: Yup.number().required('Start time is required'),
    end_time: Yup.number().required('End time is required'),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios.post('http://localhost:3001/api/adminPanel/availableRooms/addavailablerooms', values)
      .then(response => {
        console.log('Available Rooms added successfully:', response.data);
        resetForm();
        setSubmitting(false);
      })
      .catch(error => {
        console.error('Error adding Available Rooms:', error);
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{ SpringFall: '', Year: '', Room_Number: '', Department: '', start_time: '', end_time: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ maxWidth: 500, margin: '0 auto' }}>
            <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>Add Available Rooms</Typography>

            <FormControl fullWidth margin="normal" error={touched.SpringFall && !!errors.SpringFall}>
              <InputLabel>SpringFall</InputLabel>
              <Field
                name="SpringFall"
                as={Select}
                label="SpringFall"
                fullWidth
              >
                {springFallOptions.map(option => (
                  <MenuItem key={option.id} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
              {touched.SpringFall && errors.SpringFall && (
                <Typography variant="body2" color="error">
                  {errors.SpringFall}
                </Typography>
              )}
            </FormControl>

            <FormControl fullWidth margin="normal" error={touched.Year && !!errors.Year}>
              <InputLabel>Year</InputLabel>
              <Field
                name="Year"
                as={Select}
                label="Year"
                fullWidth
              >
                {yearOptions.map(option => (
                  <MenuItem key={option.id} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
              {touched.Year && errors.Year && (
                <Typography variant="body2" color="error">
                  {errors.Year}
                </Typography>
              )}
            </FormControl>

            <FormControl fullWidth margin="normal" error={touched.Room_Number && !!errors.Room_Number}>
              <InputLabel>Room Number</InputLabel>
              <Field
                name="Room_Number"
                as={Select}
                label="Room Number"
                fullWidth
              >
                {roomNumberOptions.map(option => (
                  <MenuItem key={option.id} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
              {touched.Room_Number && errors.Room_Number && (
                <Typography variant="body2" color="error">
                  {errors.Room_Number}
                </Typography>
              )}
            </FormControl>

            <FormControl fullWidth margin="normal" error={touched.Department && !!errors.Department}>
              <InputLabel>Department</InputLabel>
              <Field
                name="Department"
                as={Select}
                label="Department"
                fullWidth
              >
                {departmentOptions.map(option => (
                  <MenuItem key={option.id} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
              {touched.Department && errors.Department && (
                <Typography variant="body2" color="error">
                  {errors.Department}
                </Typography>
              )}
            </FormControl>

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
