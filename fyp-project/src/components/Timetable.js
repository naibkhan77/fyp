import React, { useState } from 'react';

import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';

const Timetable = () => {

    const [program, setProgram] = useState(""); 
    const [session, setSession] = useState(""); 
    const [section, setSection] = useState('');
    const [department, setDepartment] = useState('');

    const handleProgramChange = (event) => {
        setProgram(event.target.value); 
    }; 

    const handleSessionChange = (event) => {
        setSession(event.target.value);
      };
    
      const handleSectionChange = (event) => {
        setSection(event.target.value);
      };
    
      const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
      };

      const viewTimtable = () => {
        console.log('viewing Timetable for:',  { program, session, section, department });
      };


    return (
        <>

        <Box id="timetable-section" sx={{ padding: 3, maxWidth: 780, margin: '0 auto' }}>
            <Typography variant='h4' align='center' gutterBottom >
                Timetable
            </Typography>
                <Box component='form' sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
                }} >
                <TextField 
                 select 
                 label='program'
                 value={program}
                 onChange={handleProgramChange}
                 variant='outlined'
                 sx={{ minWidth: { xs: '100%', md: 150 } }}
                >
                <MenuItem value='Computer Science'>Computer Science</MenuItem>
                <MenuItem value='Software Enginnering'>Software Enginnering</MenuItem>
                </TextField>

                <TextField
                select
                label="Session"
                value={session}
                onChange={handleSessionChange}
                variant="outlined"
                sx={{ minWidth: { xs: '100%', md: 150 } }}
                >
                <MenuItem value="2020-2024">2020-2024</MenuItem>
                <MenuItem value="2021-2025">2021-2025</MenuItem>
                </TextField>

                <TextField
                select
                label="Section"
                value={section}
                onChange={handleSectionChange}
                variant="outlined"
                sx={{ minWidth: { xs: '100%', md: 100 } }}
                >
                <MenuItem value="A">A</MenuItem>
                <MenuItem value="B">B</MenuItem>
                </TextField>
                
                <TextField
                select
                label="Department"
                value={department}
                onChange={handleDepartmentChange}
                variant="outlined"
                sx={{ minWidth: { xs: '100%', md: 150 } }}
                >
                <MenuItem value="CS">CS</MenuItem>
                <MenuItem value="SE">SE</MenuItem>
                </TextField>

                <Button variant='outlined' color='primary' onClick={viewTimtable} 
                sx={{ minWidth: 130, color: 'black', borderColor: 'black', 
                    '&:hover': {
                        background: 'black', 
                        color: 'white',
                    },
                }} 
                >
                    View Timetable
                </Button>

            </Box>
        </Box>

        

        </>
    )
}

export default Timetable
