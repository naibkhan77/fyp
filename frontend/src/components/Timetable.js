  import React, { useState, useEffect } from 'react';
  import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
  import { Formik, Form, Field } from 'formik';
  import * as Yup from 'yup'; // For validation schema
  import axios from 'axios';
  import ViewTimetable from './ViewTimetable';

  const Timetable = () => {
    const [departmentOptions, setDepartmentOptions] = useState([]);
    const [programOptions, setProgramOptions] = useState([]);
    const [combinedSessionBatchOptions, setCombinedSessionBatchOptions] = useState([]);
    const [combinedSpringFallYearOptions, setCombinedSpringFallYearOptions] = useState([]);
    const [sectionOptions, setSectionOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [timetableData, setTimetableData] = useState([]);

    useEffect(() => {
      const fetchProgramAndDepartment = async () => {
        try {
          const response = await axios.get('http://localhost:3001/api/frontview/progdepid');
          const programs = response.data.map(item => item.program_name);
          const departments = response.data.map(item => item.department_name);
          setProgramOptions([...new Set(programs)]); // Remove duplicates
          setDepartmentOptions([...new Set(departments)]); // Remove duplicates
        } catch (error) {
          console.error('Error fetching program and department:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchProgramAndDepartment();
    }, []);

    useEffect(() => {
      const fetchSessionData = async () => {
        try {
          const response = await axios.get('http://localhost:3001/api/frontview/sesid');
          const combinedSessionBatch = response.data.map(item => ({
            label: `${item.session_name} - ${item.batch}`,
            session_name: item.session_name,
            batch: item.batch,
          }));

          const combinedSpringFallYear = response.data.map(item => ({
            label: `${item.springFall} - ${item.year}`,
            springFall: item.springFall,
            year: item.year,
          }));

          setCombinedSessionBatchOptions(combinedSessionBatch);
          setCombinedSpringFallYearOptions(combinedSpringFallYear);
        } catch (error) {
          console.error('Error fetching session data:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchSessionData();
    }, []);

    useEffect(() => {
      const fetchSection = async () => {
        try {
          const response = await axios.get('http://localhost:3001/api/frontview/secid');
          const sections = response.data.map(item => item.section_name);
          setSectionOptions([...new Set(sections)]);
        } catch (error) {
          console.error('Error fetching Section:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchSection();
    }, []);

    const validationSchema = Yup.object().shape({
      program_name: Yup.string().required('Program is required'),
      combinedSessionBatch: Yup.string().required('Session/Batch is required'),
      combinedSpringFallYear: Yup.string().required('Spring/Fall and Year is required'),
      section_name: Yup.string().required('Section is required'),
      department_name: Yup.string().required('Department is required'),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
      try {
        const [session_name, batch] = values.combinedSessionBatch.split(' - ');
        const [springFall, year] = values.combinedSpringFallYear.split(' - ');

        const formValues = {
          ...values,
          session_name,
          batch,
          springFall,
          year,
        };

        const response = await axios.get('http://localhost:3001/api/frontview/viewtimetable', {
          params: formValues,
        });
        setTimetableData(response.data);
        resetForm();
      } catch (error) {
        console.error('Error fetching timetable:', error);
      } finally {
        setSubmitting(false);
      }
    };

    return (
      <Box id="timetable-section" 
      sx={{ padding: 3, maxWidth: 780, margin: '0 auto', mt: { xs: 3, md: 8 } }}>
        <Typography variant="h4" align="center" gutterBottom>
          Timetable
        </Typography>
        <Formik
          initialValues={{
            program_name: '',
            combinedSessionBatch: '',
            combinedSpringFallYear: '',
            section_name: '',
            department_name: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, touched, errors, isSubmitting }) => (
            <Form>
              {/* Department Dropdown */}
              <FormControl fullWidth margin="normal" error={touched.department_name && !!errors.department_name}>
                <InputLabel>Department Name</InputLabel>
                <Field
                  name="department_name"
                  as={Select}
                  label="Department Name"
                  value={values.department_name}
                  onChange={handleChange}
                  fullWidth
                >
                  {departmentOptions.map((dept, index) => (
                    <MenuItem key={index} value={dept}>
                      {dept}
                    </MenuItem>
                  ))}
                </Field>
                {touched.department_name && errors.department_name && (
                  <Typography variant="body2" color="error">
                    {errors.department_name}
                  </Typography>
                )}
              </FormControl>

              {/* Program Dropdown */}
              <FormControl fullWidth margin="normal" error={touched.program_name && !!errors.program_name}>
                <InputLabel>Program Name</InputLabel>
                <Field
                  name="program_name"
                  as={Select}
                  label="Program Name"
                  value={values.program_name}
                  onChange={handleChange}
                  fullWidth
                >
                  {programOptions.map((program, index) => (
                    <MenuItem key={index} value={program}>
                      {program}
                    </MenuItem>
                  ))}
                </Field>
                {touched.program_name && errors.program_name && (
                  <Typography variant="body2" color="error">
                    {errors.program_name}
                  </Typography>
                )}
              </FormControl>

              {/* Combined Session + Batch Dropdown */}
              <FormControl fullWidth margin="normal" error={touched.combinedSessionBatch && !!errors.combinedSessionBatch}>
                <InputLabel>Session Name - Batch</InputLabel>
                <Field
                  name="combinedSessionBatch"
                  as={Select}
                  label="Session Name - Batch"
                  value={values.combinedSessionBatch}
                  onChange={handleChange}
                  fullWidth
                >
                  {combinedSessionBatchOptions.map((option, index) => (
                    <MenuItem key={index} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
                {touched.combinedSessionBatch && errors.combinedSessionBatch && (
                  <Typography variant="body2" color="error">
                    {errors.combinedSessionBatch}
                  </Typography>
                )}
              </FormControl>

              {/* Combined SpringFall + Year Dropdown */}
              <FormControl fullWidth margin="normal" error={touched.combinedSpringFallYear && !!errors.combinedSpringFallYear}>
                <InputLabel>Spring/Fall - Year</InputLabel>
                <Field
                  name="combinedSpringFallYear"
                  as={Select}
                  label="Spring/Fall - Year"
                  value={values.combinedSpringFallYear}
                  onChange={handleChange}
                  fullWidth
                >
                  {combinedSpringFallYearOptions.map((option, index) => (
                    <MenuItem key={index} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
                {touched.combinedSpringFallYear && errors.combinedSpringFallYear && (
                  <Typography variant="body2" color="error">
                    {errors.combinedSpringFallYear}
                  </Typography>
                )}
              </FormControl>

              {/* Section Dropdown */}
              <FormControl fullWidth margin="normal" error={touched.section_name && !!errors.section_name}>
                <InputLabel>Section Name</InputLabel>
                <Field
                  name="section_name"
                  as={Select}
                  label="Section Name"
                  value={values.section_name}
                  onChange={handleChange}
                  fullWidth
                >
                  {sectionOptions.map((section, index) => (
                    <MenuItem key={index} value={section}>
                      {section}
                    </MenuItem>
                  ))}
                </Field>
                {touched.section_name && errors.section_name && (
                  <Typography variant="body2" color="error">
                    {errors.section_name}
                  </Typography>
                )}
              </FormControl>

              <Button
                  variant="outlined"
                  type="submit"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting || loading}
                  sx={{
                    backgroundColor: 'black',  // Set default background to black
                    color: 'white',             // Text color is white
                    borderColor: 'black',
                    mt: 4,
                    padding: '12px 16px',      // Increased padding for top and bottom
                    fontSize: '1.1rem',        // Font size for better visibility
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Change to 50% black on hover
                      color: 'white',              // Keep text color white on hover
                    },
                    }}
                    >
                   View Timetable 
                </Button>

            </Form>
          )}
        </Formik>
        {timetableData.length > 0 && <ViewTimetable timetableData={timetableData} />}
      </Box>
    );
  };

  export default Timetable;
