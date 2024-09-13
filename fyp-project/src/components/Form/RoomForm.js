          import React from 'react';
          import { Formik, Form, Field } from 'formik';
          import * as Yup from 'yup';
          import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

          const RoomForm = () => {
            // Validation schema for Formik
            const validationSchema = Yup.object({
              roomNumber: Yup.number().required('Room Number is required'),
              capacity: Yup.number().required('Capacity is required').min(1, 'Capacity must be at least 1'),
              building: Yup.string().required('Building name is required'),
              is_lab: Yup.boolean().required('Is Lab is required'),
            });

            // Handle form submission
            const handleSubmit = async (values, { setSubmitting, resetForm }) => {
              console.log('Form values:', values);

              try {
                // API call to add a room
                const response = await fetch('http://localhost:3001/api/adminPanel/rooms/addroom', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(values),
                });

                if (response.ok) {
                  console.log('Room added successfully');
                  resetForm();
                } else {
                  console.error('Failed to add room');
                }
              } catch (error) {
                console.error('Error:', error);
              } finally {
                setSubmitting(false);
              }
            };

            return (
              <Formik
                initialValues={{ roomNumber: '', capacity: '', building: '', is_lab: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form>
                    <Box sx={{ maxWidth: 500, margin: '0 auto' }}>
                      <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>Add Room</Typography>
                      <Field
                        as={TextField}
                        name="roomNumber"
                        label="Room Number"
                        fullWidth
                        margin="normal"
                        error={touched.roomNumber && !!errors.roomNumber}
                        helperText={touched.roomNumber && errors.roomNumber}
                      />
                      <Field
                        as={TextField}
                        name="capacity"
                        label="Capacity"
                        fullWidth
                        margin="normal"
                        error={touched.capacity && !!errors.capacity}
                        helperText={touched.capacity && errors.capacity}
                      />
                      <Field
                        as={TextField}
                        name="building"
                        label="Building"
                        fullWidth
                        margin="normal"
                        error={touched.building && !!errors.building}
                        helperText={touched.building && errors.building}
                      />
                      <FormControl fullWidth margin="normal" error={touched.is_lab && !!errors.is_lab}>
                        <InputLabel>Is Lab</InputLabel>
                        <Field
                          name="is_lab"
                          as={Select}
                          label="Is Lab"
                          fullWidth
                        >
                          <MenuItem value={true}>True</MenuItem>
                          <MenuItem value={false}>False</MenuItem>
                        </Field>
                        {touched.is_lab && errors.is_lab && (
                          <Typography variant="body2" color="error">
                            {errors.is_lab}
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
                        Add Room
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            );
          };

          export default RoomForm;
