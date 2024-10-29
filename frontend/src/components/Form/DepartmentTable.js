import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const DepartmentTable = ({ departments }) => {
    return (
        <TableContainer component={Paper} sx={{ backgroundColor: '#f5f5f5', mt: '60px' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: 'bold' }}>Department ID</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }}>Department Name</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }}>Department Code</TableCell> {/* New Column for Department Code */}
                        <TableCell style={{ fontWeight: 'bold' }}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {departments?.map((department) => (
                        <TableRow key={department.department_id}>
                            <TableCell
                                sx={{
                                    backgroundColor: '#f5f5f5',
                                    '&:hover': {
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                    },
                                }}
                            >
                                <Typography variant="body1">
                                    {department.department_id}
                                </Typography>
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
                                {department.department_name}
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
                                {department.department_code} {/* Display Department Code */}
                            </TableCell>
                            {/* Add any actions here if needed */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DepartmentTable;
