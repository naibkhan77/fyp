import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const SectionTable = ({ sections }) => {
    return (
        <TableContainer component={Paper} sx={{ backgroundColor: '#f5f5f5', mt: '60px' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        {/* Make header cells bold */}
                        <TableCell style={{ fontWeight: 'bold' }}>Section ID</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }}>Section Name</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }}>Section Code</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }}>Course ID</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }}>Instructor Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sections?.map((section, index) => (
                        <TableRow key={index}>
                            {/* Apply hover effect and background color */}
                            <TableCell
                                sx={{
                                    backgroundColor: '#f5f5f5',
                                    '&:hover': {
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                    },
                                }}
                            >
                                <Typography variant="body1">{section.section_id}</Typography>
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: '#f5f5f5',
                                    '&:hover': {
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                    },
                                }}
                            >
                                {section.section_name}
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: '#f5f5f5',
                                    '&:hover': {
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                    },
                                }}
                            >
                                {section.section_code}
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: '#f5f5f5',
                                    '&:hover': {
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                    },
                                }}
                            >
                                {section.course_id}
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: '#f5f5f5',
                                    '&:hover': {
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                    },
                                }}
                            >
                                {section.instructor_name}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SectionTable;
