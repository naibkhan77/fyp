import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, FormHelperText } from '@mui/material';

const CurrentSessionForm = () => {
  const [batches, setBatches] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data for both batches and sessions when the component mounts
  useEffect(() => {
    const fetchBatchesAndSessions = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/api/adminPanel/semester/getsessionid', {
          headers: { token },
        });

        const data = response.data;

        // Extract unique sessions and batches from the response
        const uniqueSessions = [...new Set(data.map(item => item.session_name))]; // Get unique session names
        const uniqueBatches = [...new Set(data.map(item => item.batch))]; // Get unique batch names

        setSessions(uniqueSessions);
        setBatches(uniqueBatches);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBatchesAndSessions();
  }, []);

  // Validation schema for Formik
  const validationSchema = Yup.object({
    springFall: Yup.string().required('SpringFall is required'),
    batch: Yup.string().required('Batch is required'),
    year: Yup.number().required('Year is required'),
    session_name: Yup.string().required('Session Name is required'),
  });

  // Handle form submission
  const handleCurrentSession = async (values, { setSubmitting, resetForm }) => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No authentication token found.');
      return;
    }

    try {
      // API call to add the session
      const response = await fetch('http://localhost:3001/api/adminPanel/semester/addsemester', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          token: token,
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('Current session added successfully');
        resetForm(); // Reset form on success
      } else {
        console.error('Failed to add current session');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ springFall: '', batch: '', year: '', session_name: '' }}
      validationSchema={validationSchema}
      onSubmit={handleCurrentSession}
    >
      {({ errors, touched, isSubmitting, handleChange, values }) => (
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

            {/* Batch Dropdown */}
            <FormControl fullWidth margin="normal" error={touched.batch && !!errors.batch}>
              <InputLabel>Batch</InputLabel>
              <Select
                name="batch"
                value={values.batch}
                onChange={handleChange}
                label="Batch"
                disabled={loading}
              >
                {loading ? (
                  <MenuItem value="">Loading...</MenuItem>
                ) : (
                  batches.length > 0 ? (
                    batches.map((batch, index) => (
                      <MenuItem key={index} value={batch}>
                        {batch} {/* Display batch value */}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">No batches available</MenuItem>
                  )
                )}
              </Select>
              {touched.batch && errors.batch && (
                <FormHelperText>{errors.batch}</FormHelperText>
              )}
            </FormControl>

            {/* Year Field */}
            <Field
              as={TextField}
              name="year"
              label="Year"
              fullWidth
              margin="normal"
              error={touched.year && !!errors.year}
              helperText={touched.year && errors.year}
            />

            {/* Session Name Dropdown */}
            <FormControl fullWidth margin="normal" error={touched.session_name && !!errors.session_name}>
              <InputLabel>Session Name</InputLabel>
              <Select
                name="session_name"
                value={values.session_name}
                onChange={handleChange}
                label="Session Name"
                disabled={loading}
              >
                {loading ? (
                  <MenuItem value="">Loading...</MenuItem>
                ) : (
                  sessions.length > 0 ? (
                    sessions.map((session, index) => (
                      <MenuItem key={index} value={session}>
                        {session} {/* Display session value */}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">No sessions available</MenuItem>
                  )
                )}
              </Select>
              {touched.session_name && errors.session_name && (
                <FormHelperText>{errors.session_name}</FormHelperText>
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
              {isSubmitting ? 'Submitting...' : 'Add Current Session'}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default CurrentSessionForm;
