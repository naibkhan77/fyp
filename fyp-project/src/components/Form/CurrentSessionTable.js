import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const CurrentSessionTable = ({ current_session }) => {
  console.log('semester data:', current_session);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Current ID</TableCell>
            <TableCell>SpringFall</TableCell>
            <TableCell>Batch</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Session Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {current_session.map((cursess) => (
            <TableRow key={cursess.cs_id}>
              <TableCell>{cursess.cs_id}</TableCell>
              <TableCell>{cursess.springFall}</TableCell>
              <TableCell>{cursess.batch}</TableCell>
              <TableCell>{cursess.year}</TableCell>
              <TableCell>{cursess.session_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CurrentSessionTable