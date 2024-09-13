import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios'; // Import axios for API requests

const SectionForm = () => {
  // Validation schema for Formik
  const validationSchema = Yup.object({
    sectionName: Yup.string().required('Section Name is required'),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('http://localhost:3001/api/adminPanel/section/addsection', values);
      console.log('Section added successfully:', response.data);
      resetForm();
    } catch (error) {
      console.error('Error adding section:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ sectionName: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ maxWidth: 500, margin: '0 auto' }}>
            <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>Add Section</Typography>
            <Field
              as={TextField}
              name="sectionName"
              label="Section Name"
              fullWidth
              margin="normal"
              error={touched.sectionName && !!errors.sectionName}
              helperText={touched.sectionName && errors.sectionName}
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
              Add Section
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SectionForm;
