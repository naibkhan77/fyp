import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';


const ProgramTable = ({ program }) => {
    return (
        <>

        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Program Name</TableCell>
            <TableCell>Credits</TableCell>
            <TableCell>department_Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {program.map((program, index) => (
            <TableRow key={index}>
              <TableCell>{program.programName}</TableCell>
              <TableCell>{program.credits}</TableCell>
              <TableCell>{program.department_Name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

        </>
    )
}

export default ProgramTable
