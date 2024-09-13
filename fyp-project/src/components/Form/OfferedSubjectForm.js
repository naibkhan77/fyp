import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const OfferedSubjectForm = () => {
  // States to hold dropdown data
  const [programs, setPrograms] = useState([]);
  const [years, setYears] = useState([]);
  const [springFalls, setSpringFalls] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [sessions, setSessions] = useState([]);

  // Fetching data from APIs
  useEffect(() => {
    // Fetch programs and departments
    axios.get('http://localhost:3001/api/adminPanel/offeredsubjects/getprogdepids')
      .then(response => {
        const { programs, departments } = response.data;
        setPrograms(programs);
        setDepartments(departments);
      })
      .catch(error => console.error('Error fetching programs and departments:', error));

    // Fetch session, batch, year, and spring/fall
    axios.get('http://localhost:3001/api/adminPanel/offeredsubjects/getsescsid')
      .then(response => {
        const { sessions, batches, years, springFalls } = response.data;
        setSessions(sessions);
        setBatches(batches);
        setYears(years);
        setSpringFalls(springFalls);
      })
      .catch(error => console.error('Error fetching sessions, batches, years, and spring/falls:', error));

    // Fetch courses
    axios.get('http://localhost:3001/api/adminPanel/offeredsubjects/getcourseid')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  // Validation schema for Formik
  const validationSchema = Yup.object({
    program_Name: Yup.string().required('Program Name is required'),
    Year: Yup.number().required('Year is required'),
    SpringFall: Yup.string().required('SpringFall is required'),
    Department_Name: Yup.string().required('Department is required'),
    Course_Name: Yup.string().required('Course Name is required'),
    Batch: Yup.string().required('Batch is required'),
    Session_Name: Yup.string().required('Session Name is required'),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form values:', values);
    // Submit form data to API
    axios.post('http://localhost:3001/api/adminPanel/offeredsubjects/addofferedsubject', values)
      .then(response => {
        console.log('Subject offered successfully:', response.data);
        resetForm();
      })
      .catch(error => {
        console.error('Error offering subject:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{ program_Name: '', Year: '', SpringFall: '', Department_Name: '', Course_Name: '', Batch: '', Session_Name: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ maxWidth: 500, margin: '0 auto' }}>
            <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>Add Offered Subject</Typography>

            <FormControl fullWidth margin="normal" error={touched.program_Name && !!errors.program_Name}>
              <InputLabel>Program Name</InputLabel>
              <Field name="program_Name" as={Select} label="Program Name" fullWidth>
                {programs.map(program => (
                  <MenuItem key={program.id} value={program.name}>
                    {program.name}
                  </MenuItem>
                ))}
              </Field>
              {touched.program_Name && errors.program_Name && (
                <Typography variant="body2" color="error">
                  {errors.program_Name}
                </Typography>
              )}
            </FormControl>

            <FormControl fullWidth margin="normal" error={touched.Year && !!errors.Year}>
              <InputLabel>Year</InputLabel>
              <Field name="Year" as={Select} label="Year" fullWidth>
                {years.map(year => (
                  <MenuItem key={year.id} value={year.year}>
                    {year.year}
                  </MenuItem>
                ))}
              </Field>
              {touched.Year && errors.Year && (
                <Typography variant="body2" color="error">
                  {errors.Year}
                </Typography>
              )}
            </FormControl>

            <FormControl fullWidth margin="normal" error={touched.SpringFall && !!errors.SpringFall}>
              <InputLabel>Spring/Fall</InputLabel>
              <Field name="SpringFall" as={Select} label="Spring/Fall" fullWidth>
                {springFalls.map(springFall => (
                  <MenuItem key={springFall.id} value={springFall.name}>
                    {springFall.name}
                  </MenuItem>
                ))}
              </Field>
              {touched.SpringFall && errors.SpringFall && (
                <Typography variant="body2" color="error">
                  {errors.SpringFall}
                </Typography>
              )}
            </FormControl>

            <FormControl fullWidth margin="normal" error={touched.Department_Name && !!errors.Department_Name}>
              <InputLabel>Department Name</InputLabel>
              <Field name="Department_Name" as={Select} label="Department Name" fullWidth>
                {departments.map(department => (
                  <MenuItem key={department.id} value={department.name}>
                    {department.name}
                  </MenuItem>
                ))}
              </Field>
              {touched.Department_Name && errors.Department_Name && (
                <Typography variant="body2" color="error">
                  {errors.Department_Name}
                </Typography>
              )}
            </FormControl>

            <FormControl fullWidth margin="normal" error={touched.Course_Name && !!errors.Course_Name}>
              <InputLabel>Course Name</InputLabel>
              <Field name="Course_Name" as={Select} label="Course Name" fullWidth>
                {courses.map(course => (
                  <MenuItem key={course.id} value={course.name}>
                    {course.name}
                  </MenuItem>
                ))}
              </Field>
              {touched.Course_Name && errors.Course_Name && (
                <Typography variant="body2" color="error">
                  {errors.Course_Name}
                </Typography>
              )}
            </FormControl>

            <FormControl fullWidth margin="normal" error={touched.Batch && !!errors.Batch}>
              <InputLabel>Batch</InputLabel>
              <Field name="Batch" as={Select} label="Batch" fullWidth>
                {batches.map(batch => (
                  <MenuItem key={batch.id} value={batch.name}>
                    {batch.name}
                  </MenuItem>
                ))}
              </Field>
              {touched.Batch && errors.Batch && (
                <Typography variant="body2" color="error">
                  {errors.Batch}
                </Typography>
              )}
            </FormControl>

            <FormControl fullWidth margin="normal" error={touched.Session_Name && !!errors.Session_Name}>
              <InputLabel>Session Name</InputLabel>
              <Field name="Session_Name" as={Select} label="Session Name" fullWidth>
                {sessions.map(session => (
                  <MenuItem key={session.id} value={session.name}>
                    {session.name}
                  </MenuItem>
                ))}
              </Field>
              {touched.Session_Name && errors.Session_Name && (
                <Typography variant="body2" color="error">
                  {errors.Session_Name}
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
              Add Offered Subject
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default OfferedSubjectForm;
