import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const TeacherTimetable = ({ TeacherTimetable }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell style={{ fontWeight: 'bold' }}>Program Name</TableCell>
          <TableCell style={{ fontWeight: 'bold' }}>Department Name</TableCell>
          <TableCell style={{ fontWeight: 'bold' }}>Section Name</TableCell>
          <TableCell style={{ fontWeight: 'bold' }}>Course Name</TableCell>
          <TableCell style={{ fontWeight: 'bold' }}>Day</TableCell>
          <TableCell style={{ fontWeight: 'bold' }}>Time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {TeacherTimetable.map((TeacherTable, index) => (
          <TableRow key={index}>
            <TableCell>{TeacherTable.program_name}</TableCell>
            <TableCell>{TeacherTable.department_name}</TableCell>
            <TableCell>{TeacherTable.section_name}</TableCell>
            <TableCell>{TeacherTable.course_name}</TableCell>
            <TableCell>{TeacherTable.day}</TableCell>
            <TableCell>{TeacherTable.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TeacherTimetable;
