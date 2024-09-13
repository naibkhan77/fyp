import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const sessionTable = ({ session }) => {
    return (
        <>

        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Session_Name</TableCell>
            <TableCell>Batch</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {session.map((session, index) => (
            <TableRow key={index}>
              <TableCell>{session.session_Name}</TableCell>
              <TableCell>{session.batch}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

        </>
    )
}

export default sessionTable
