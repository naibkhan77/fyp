import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';


const AvailableTable = ({availableRoom}) => {
    return (
        <>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>SpringFall</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Room_Number</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Start_Time</TableCell>
            <TableCell>End_Time</TableCell>
          </TableRow>
         </TableHead>
         <TableBody>
          {availableRoom.map((availableRoom, index) => (
            <TableRow key={index}>
              <TableCell>{availableRoom.springFall}</TableCell>
              <TableCell>{availableRoom.year}</TableCell>
              <TableCell>{availableRoom.room_Number}</TableCell>
              <TableCell>{availableRoom.department}</TableCell>
              <TableCell>{availableRoom.start_time}</TableCell>
              <TableCell>{availableRoom.end_time}</TableCell>
            </TableRow>
          ))}
         </TableBody>
        </Table>

        </>
    )
}

export default AvailableTable
