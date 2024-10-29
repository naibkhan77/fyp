import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const CourseTable = ({ courses }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }}>Course ID</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Course Name</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Course Code</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Credits</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Department Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.course_id}>
              <TableCell>{course.course_id}</TableCell>
              <TableCell>{course.course_name}</TableCell>
              <TableCell>{course.course_code}</TableCell>
              <TableCell>{course.credits}</TableCell>
              <TableCell>{course.department_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CourseTable;
