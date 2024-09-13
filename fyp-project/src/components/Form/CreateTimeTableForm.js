import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const CreateTimeTableForm = () => {
  // Validation schema for Formik
  const validationSchema = Yup.object({
    sessionName: Yup.string().required('Session Name is required'),
    batch: Yup.string().required('Batch is required'),
    year: Yup.number().required('Year is required').min(1900, 'Year must be valid'),
    springFall: Yup.string().required('Spring/Fall is required'),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log('Form values:', values);

    try {
      // API call to add a timetable
      const response = await fetch('http://localhost:3001/api/adminPanel/timetable/addtimetable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('Timetable created successfully');
        resetForm();
      } else {
        console.error('Failed to create timetable');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ sessionName: '', batch: '', year: '', springFall: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ maxWidth: 500, margin: '0 auto' }}>
            <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>Create Timetable</Typography>
            <Field
              as={TextField}
              name="sessionName"
              label="Session Name"
              fullWidth
              margin="normal"
              error={touched.sessionName && !!errors.sessionName}
              helperText={touched.sessionName && errors.sessionName}
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
            <Field
              as={TextField}
              name="year"
              label="Year"
              fullWidth
              margin="normal"
              error={touched.year && !!errors.year}
              helperText={touched.year && errors.year}
            />
            <FormControl fullWidth margin="normal" error={touched.springFall && !!errors.springFall}>
              <InputLabel>Spring/Fall</InputLabel>
              <Field
                name="springFall"
                as={Select}
                label="Spring/Fall"
                fullWidth
              >
                <MenuItem value="Spring">Spring</MenuItem>
                <MenuItem value="Fall">Fall</MenuItem>
              </Field>
              {touched.springFall && errors.springFall && (
                <Typography variant="body2" color="error">
                  {errors.springFall}
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
              Create Timetable
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default CreateTimeTableForm;
