import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';


const OfferedSubjectTable = ({ offersubject }) => {
    return (
        <>

        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Program_Name</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>SpringFall</TableCell>
            <TableCell>Department_Name</TableCell>
            <TableCell>Course_Name</TableCell>
            <TableCell>Batch</TableCell>
            <TableCell>Session_Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {offersubject.map((offersubject, index) => (
            <TableRow key={index}>
              <TableCell>{offersubject.Program_Name}</TableCell>
              <TableCell>{offersubject.Year}</TableCell>
              <TableCell>{offersubject.SpringFall}</TableCell>
              <TableCell>{offersubject.Department_Name}</TableCell>
              <TableCell>{offersubject.Course_Name}</TableCell>
              <TableCell>{offersubject.Batch}</TableCell>
              <TableCell>{offersubject.Session_Name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

        </>
    )
}

export default OfferedSubjectTable
