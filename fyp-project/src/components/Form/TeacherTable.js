import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const TeacherTable = ({ teachers }) => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Teacher Name</TableCell>
            <TableCell>Department ID</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map((teacher, index) => (
            <TableRow key={index}>
              <TableCell>{teacher.teacherName}</TableCell>
              <TableCell>{teacher.departmentId}</TableCell>
              <TableCell>{teacher.designation}</TableCell>
              <TableCell>{teacher.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TeacherTable;
