import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const CreateTimetableTable = ({ timetable }) => {
    return (
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{ fontWeight: 'bold' }}>program Name</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>springFall</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>year</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>department Name</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>section Name</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Teacher Name</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Room Number</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Department</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Course Name</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>session Name</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Batch</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Time</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Day</TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
                {timetable.map((timetable) => (
                    <TableRow key={timetable.timetable_id}>
                        <TableCell>{timetable.program_name}</TableCell>
                        <TableCell>{timetable.springFall}</TableCell>
                        <TableCell>{timetable.year}</TableCell>
                        <TableCell>{timetable.department_name}</TableCell>
                        <TableCell>{timetable.section_name}</TableCell>
                        <TableCell>{timetable.teacher_name}</TableCell>
                        <TableCell>{timetable.room_number}</TableCell>
                        <TableCell>{timetable.department}</TableCell>
                        <TableCell>{timetable.course_name}</TableCell>
                        <TableCell>{timetable.session_name}</TableCell>
                        <TableCell>{timetable.batch}</TableCell>
                        <TableCell>{timetable.time}</TableCell>
                        <TableCell>{timetable.day}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>

    )
}

export default CreateTimetableTable