import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Box, Button, TextField, Typography, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const CourseForm = () => {
  // State to hold department data
  const [departments, setDepartments] = useState([]);

  // Fetch department data from the provided API
  useEffect(() => {
    axios.get('http://localhost:3001/api/adminPanel/courses/getdepid')
      .then(response => {
        setDepartments(response.data);
      })
      .catch(error => {
        console.error('Error fetching departments:', error);
      });
  }, []);

  // Validation schema for Formik
  const validationSchema = Yup.object({
    courseCode: Yup.string().required('Course Code is required'),
    courseName: Yup.string().required('Course Name is required'),
    credits: Yup.number().required('Credits are required').min(1, 'Credits must be at least 1'),
    department_Name: Yup.string().required('Department is required'),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log('Form values:', values);

    try {
      // API call to add a course
      const response = await axios.post('http://localhost:3001/api/adminPanel/courses/addcourse', values);

      if (response.status === 200) {
        console.log('Course added successfully');
        resetForm();
      } else {
        console.error('Failed to add course');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ courseCode: '', courseName: '', credits: '', department_Name: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ maxWidth: 500, margin: '0 auto' }}>
            <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>Add Course</Typography>

            <Field
              as={TextField}
              name="courseCode"
              label="Course Code"
              fullWidth
              margin="normal"
              error={touched.courseCode && !!errors.courseCode}
              helperText={touched.courseCode && errors.courseCode}
            />

            <Field
              as={TextField}
              name="courseName"
              label="Course Name"
              fullWidth
              margin="normal"
              error={touched.courseName && !!errors.courseName}
              helperText={touched.courseName && errors.courseName}
            />

            <Field
              as={TextField}
              name="credits"
              label="Credits"
              fullWidth
              margin="normal"
              error={touched.credits && !!errors.credits}
              helperText={touched.credits && errors.credits}
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
              Add Course
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default CourseForm;
