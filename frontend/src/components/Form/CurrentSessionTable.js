import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const CurrentSessionTable = ({ currentSession }) => {
  console.log('semester data:', currentSession);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {/* Make header cells bold */}
            <TableCell style={{ fontWeight: 'bold' }}>Current ID</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Spring/Fall</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Batch</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Year</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Session Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentSession.map((session) => (
            <TableRow key={session.cs_id}>
              {/* Make body cells bold */}
              <TableCell >{session.cs_id}</TableCell>
              <TableCell >{session.springFall}</TableCell>
              <TableCell >{session.batch}</TableCell>
              <TableCell >{session.year}</TableCell>
              <TableCell >{session.session_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CurrentSessionTable;
