import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';

const TeacherForm = () => {
  const [departments, setDepartments] = useState([]);

  // Fetch departments when the component mounts
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/adminPanel/teachers/getdepid');
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []);

  // Validation schema for Formik
  const validationSchema = Yup.object({
    teacherName: Yup.string().required('Teacher Name is required'),
    departmentName: Yup.string().required('Department Name is required'),
    designation: Yup.string().required('Designation is required'),
    email: Yup.string().required('Email is required').email('Invalid email format'),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form values:', values);
    
    // Prepare data for the API call
    const formData = {
      teacherName: values.teacherName, 
      departmentId: values.departmentName, // Correcting departmentName to departmentId
      designation: values.designation, 
      email: values.email, 
    }; 

    // Make API request using Axios
    axios.post('http://localhost:3001/api/adminPanel/teachers/addteacher', formData)
      .then(response => {
        console.log('Teacher added successfully', response.data); 
        resetForm(); 
      })
      .catch(error => {
        console.error('There was an error adding the teacher:', error); 
      })
      .finally(() => {
        setSubmitting(false); 
      }); 
  };

  return (
    <Formik
      initialValues={{ teacherName: '', departmentName: '', designation: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ maxWidth: 500, margin: '0 auto' }}>
            <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>Add Teacher</Typography>
            <Field
              as={TextField}
              name="teacherName"
              label="Teacher Name"
              fullWidth
              margin="normal"
              error={touched.teacherName && !!errors.teacherName}
              helperText={touched.teacherName && errors.teacherName}
            />
            <FormControl fullWidth margin="normal" error={touched.departmentName && !!errors.departmentName}>
              <InputLabel>Department Name</InputLabel>
              <Field
                name="departmentName" // Corrected from "department Name"
                as={Select}
                label="Department Name"
                fullWidth
              >
                {departments.map((department) => (
                  <MenuItem key={department.id} value={department.id}>
                    {department.name}
                  </MenuItem>
                ))}
              </Field>
              {touched.departmentName && errors.departmentName && (
                <Typography variant="body2" color="error">
                  {errors.departmentName}
                </Typography>
              )}
            </FormControl>
            <Field
              as={TextField}
              name="designation"
              label="Designation"
              fullWidth
              margin="normal"
              error={touched.designation && !!errors.designation}
              helperText={touched.designation && errors.designation}
            />
            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              margin="normal"
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
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
              Add Teacher
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default TeacherForm;
