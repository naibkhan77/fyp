import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const CreateTimetableTable = ({ timetable }) => {
    return (
        <>

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Department</TableCell>
                    <TableCell>Semester</TableCell>
                    <TableCell>Course</TableCell>
                    <TableCell>Room</TableCell>
                    <TableCell>Time Slot</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {timetable.map((entry, index) => (
                    <TableRow key={index}>
                        <TableCell>{entry.department}</TableCell>
                        <TableCell>{entry.semester}</TableCell>
                        <TableCell>{entry.course}</TableCell>
                        <TableCell>{entry.room}</TableCell>
                        <TableCell>{entry.timeSlot}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

        </>
    )
}

export default CreateTimetableTable
