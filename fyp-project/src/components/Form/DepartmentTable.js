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
          {departments && departments.length > 0 ? (
            departments.map((department, index) => (
              <TableRow key={index}>
                <TableCell>{department.department_name}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={1} align="center">
                No departments available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
        </>
    )
}

export default DepartmentTable;
