import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const DepartmentTable = ({ departments }) => {
    return (
        <>

        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Department Name</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {departments.map((department, index) => (
            <TableRow key={index}>
              <TableCell>{department.departmentName}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>

        </>
    )
}

export default DepartmentTable
