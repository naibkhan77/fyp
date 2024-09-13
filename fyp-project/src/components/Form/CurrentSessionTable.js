import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const CurrentSessionTable = ({ current_session }) => {
    return (
        <>

        <Table>
        <TableHead>
          <TableRow>
            <TableCell>SpringFall</TableCell>
            <TableCell>Batch</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Session_Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {current_session.map((current_session, index) => (
            <TableRow key={index}>
              <TableCell>{current_session.springFall}</TableCell>
              <TableCell>{current_session.batch}</TableCell>
              <TableCell>{current_session.year}</TableCell>
              <TableCell>{current_session.session_Name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

        </>
    )
}

export default CurrentSessionTable
