import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const CurrentSessionForm = ({ handleAddCurrentSession }) => {
  const [batches, setBatches] = useState([]);
  const [sessions, setSessions] = useState([]);

  // Fetch data for Batches and Sessions when the component mounts
  useEffect(() => {
    const fetchBatchesAndSessions = async () => {
      try {
        const batchResponse = await axios.get('/api/adminPanel/semester/getsessionid');
        const sessionResponse = await axios.get('/api/adminPanel/semester/getsessionid');
        setBatches(batchResponse.data);
        setSessions(sessionResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBatchesAndSessions();
  }, []);

  // Validation schema for Formik
  const validationSchema = Yup.object({
    springFall: Yup.string().required('SpringFall is required'),
    batch: Yup.string().required('Batch is required'),
    year: Yup.string().required('Year is required'),
    session_Name: Yup.string().required('Session Name is required'),
  });

  // Handle form submission
  const handleCurrentSession = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post('http://localhost:3001/api/adminPanel/semester/addsemester', values);
      console.log('Current session added successfully');
      handleAddCurrentSession(values); // Call the prop function to handle the submission
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ springFall: '', batch: '', year: '', session_Name: '' }}
      validationSchema={validationSchema}
      onSubmit={handleCurrentSession}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ maxWidth: 500, margin: '0 auto' }}>
            <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>Add Current Session</Typography>
            <Field
              as={TextField}
              name="springFall"
              label="SpringFall"
              fullWidth
              margin="normal"
              error={touched.springFall && !!errors.springFall}
              helperText={touched.springFall && errors.springFall}
            />
            <FormControl fullWidth margin="normal" error={touched.batch && !!errors.batch}>
              <InputLabel>Batch</InputLabel>
              <Field
                name="batch"
                as={Select}
                label="Batch"
              >
                {batches.map((batch) => (
                  <MenuItem key={batch.id} value={batch.id}>
                    {batch.name}
                  </MenuItem>
                ))}
              </Field>
              {touched.batch && errors.batch && (
                <Typography variant="body2" color="error">
                  {errors.batch}
                </Typography>
              )}
            </FormControl>
            <Field
              as={TextField}
              name="year"
              label="Year"
              fullWidth
              margin="normal"
              error={touched.year && !!errors.year}
              helperText={touched.year && errors.year}
            />
            <FormControl fullWidth margin="normal" error={touched.session_Name && !!errors.session_Name}>
              <InputLabel>Session Name</InputLabel>
              <Field
                name="session_Name"
                as={Select}
                label="Session Name"
              >
                {sessions.map((session) => (
                  <MenuItem key={session.id} value={session.id}>
                    {session.name}
                  </MenuItem>
                ))}
              </Field>
              {touched.session_Name && errors.session_Name && (
                <Typography variant="body2" color="error">
                  {errors.session_Name}
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
              Add Current Session
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default CurrentSessionForm;
