import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';

const SessionForm = () => {

  // Validation schema for Formik
  const validationSchema = Yup.object({
    session_Name: Yup.string().required('Session Name is required'),
    batch: Yup.string().required('Batch is required'),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('http://localhost:3001/api/adminPanel/session/addsession', {
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
      console.log('Session added successfully:', data);
      resetForm();
    } catch (error) {
      console.error('Error adding session:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ session_Name: '', batch: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ maxWidth: 500, margin: '0 auto' }}>
            <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>Add Session</Typography>
            <Field
              as={TextField}
              name="session_Name"
              label="Session Name"
              fullWidth
              margin="normal"
              error={touched.session_Name && !!errors.session_Name}
              helperText={touched.session_Name && errors.session_Name}
            />
            <Field
              as={TextField}
              name="batch"
              label="Batch"
              fullWidth
              margin="normal"
              error={touched.batch && !!errors.batch}
              helperText={touched.batch && errors.batch}
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
              Add Session
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SessionForm;
