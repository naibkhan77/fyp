import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';

const DepartmentForm = () => {
  // Validation schema for Formik
  const validationSchema = Yup.object({
    departmentName: Yup.string().required('Department Name is required'),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('http://localhost:3001/api/adminPanel/department/adddepartment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Department added successfully:', data);
      resetForm();
    } catch (error) {
      console.error('Error adding department:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ departmentName: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ maxWidth: 500, margin: '0 auto' }}>
            <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>Add Department</Typography>
            <Field
              as={TextField}
              name="departmentName"
              label="Department Name"
              fullWidth
              margin="normal"
              error={touched.departmentName && !!errors.departmentName}
              helperText={touched.departmentName && errors.departmentName}
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
              Add Department
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default DepartmentForm;
