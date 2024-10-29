import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const RoomTable = ({ rooms }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }}>Room ID</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Room Number</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Capacity</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Building</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Department</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Is Lab</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rooms.map((room) => (
            <TableRow key={room.room_id}>
              <TableCell>{room.room_id}</TableCell>
              <TableCell>{room.room_number}</TableCell>
              <TableCell>{room.capacity}</TableCell>
              <TableCell>{room.building}</TableCell>
              <TableCell>{room.department}</TableCell>
              <TableCell>{room.is_lab ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RoomTable;
