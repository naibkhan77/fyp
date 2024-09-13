import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Box, Button, TextField, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const ProgramForm = () => {
  // State to hold the department data
  const [departments, setDepartments] = useState([]);

  // Fetch department data from API
  useEffect(() => {
    axios.get('http://localhost:3001/api/adminPanel/programs/getids')
      .then(response => {
        setDepartments(response.data); // Assuming response.data is an array of department objects
      })
      .catch(error => {
        console.error('Error fetching departments:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  // Validation schema for Formik
  const validationSchema = Yup.object({
    programName: Yup.string().required('Program Name is required'),
    credits_required: Yup.string().required('Credits required'),
    department_Name: Yup.string().required('Department Name is required'),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form values:', values);

    // Make an API request to submit the form data
    axios.post('http://localhost:3001/api/adminPanel/programs/addprogram', values)
      .then(response => {
        console.log('Program added successfully:', response.data);
        resetForm();
      })
      .catch(error => {
        console.error('Error adding program:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{ programName: '', credits_required: '', department_Name: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ maxWidth: 500, margin: '0 auto' }}>
            <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>Add Program</Typography>
            <Field
              as={TextField}
              name="programName"
              label="Program Name"
              fullWidth
              margin="normal"
              error={touched.programName && !!errors.programName}
              helperText={touched.programName && errors.programName}
            />
            <Field
              as={TextField}
              name="credits_required"
              label="Credits Required"
              fullWidth
              margin="normal"
              error={touched.credits_required && !!errors.credits_required}
              helperText={touched.credits_required && errors.credits_required}
            />
            <FormControl fullWidth margin="normal" error={touched.department_Name && !!errors.department_Name}>
              <InputLabel>Department Name</InputLabel>
              <Field
                name="department_Name"
                as={Select}
                label="Department Name"
                fullWidth
              >
                {departments.map(department => (
                  <MenuItem key={department.id} value={department.name}>
                    {department.name}
                  </MenuItem>
                ))}
              </Field>
              {touched.department_Name && errors.department_Name && (
                <Typography variant="body2" color="error">
                  {errors.department_Name}
                </Typography>
              )}
            </FormControl>
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
              Add Program
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ProgramForm;
