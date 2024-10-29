import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const TeacherTable = ({ teachers }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }}>Teacher ID</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Teacher Name</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Department Name</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Designation</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.teacher_id}>
              <TableCell>{teacher.teacher_id}</TableCell>
              <TableCell>{teacher.teacher_name}</TableCell>
              <TableCell>{teacher.department_name}</TableCell>
              <TableCell>{teacher.designation}</TableCell>
              <TableCell>{teacher.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeacherTable;
