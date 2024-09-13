import React, { useState } from 'react';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { School as SchoolIcon, Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


import ViewButtonsGrid from '../components/ViewTable/ViewButtonsGrid';

import RoomForm from '../components/Form/RoomForm';
import RoomTable from '../components/Form/RoomTable';
import CourseForm from '../components/Form/CourseForm';
import CourseTable from '../components/Form/CourseTable';
import TeacherForm from '../components/Form/TeacherForm';
import TeacherTable from '../components/Form/TeacherTable';
import DepartmentForm from '../components/Form/DepartmentForm';
import DepartmentTable from '../components/Form/DepartmentTable';
import SessionForm from '../components/Form/SessionForm';
import SessionTable from '../components/Form/SessionTable';
import ProgramForm from '../components/Form/ProgramForm';
import ProgramTable from '../components/Form/ProgramTable';
import AvailableRoomForm from '../components/Form/AvailableRoomForm';
import AvailableTable from '../components/Form/AvailableTable';
import SectionForm from '../components/Form/SectionForm';
import SectionTable from '../components/Form/SectionTable';
import CurrentSessionForm from '../components/Form/CurrentSessionForm';
import CurrentSessionTable from '../components/Form/CurrentSessionTable';
import OfferedSubjectForm from '../components/Form/OfferedSubjectForm';
import OfferedSubjectTable from '../components/Form/OfferedSubjectTable';

const menuItems = [
  { label: 'Add Rooms', path: '/admin/add-room' },
  { label: 'Add Course', path: '/admin/add-course' },
  { label: 'Add Teacher', path: '/admin/add-teacher' },
  { label: 'Add Department', path: '/admin/add-department' },
  { label: 'Add Session', path: '/admin/add-session' },
  { label: 'Add Program', path: '/admin/add-program' },
  { label: 'Add Available Rooms', path: '/admin/add-available-rooms' },
  { label: 'Add Section', path: '/admin/add-section' },
  { label: 'Add Current Session', path: '/admin/add-current-session' },
  { label: 'Add Offered Subject', path: '/admin/add-offered-subject' },
  { label: 'Create Timetable', path: '/admin/create-timetable' },
];

const Admin = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  const [rooms, setRooms] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [department, setDepartment] = useState([]);
  const [session, setSession] = useState([]);
  const [program, setProgram] = useState([]);
  const [availableRoom, setAvailableRoom] = useState([]);
  const [section, setSection] = useState([]);
  const [currentSession, setCurrentSession] = useState([]);
  const [offeredSubject, setOfferedSubject] = useState([]);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item.label);
  };

  const handleAddRoom = (values, { setSubmitting, resetForm }) => {
    fetch('http://localhost:3001/api/adminPanel/rooms/addroom', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(data => {
        setRooms([...rooms, data]);
        resetForm();
      })
      .catch(error => console.error('Error:', error))
      .finally(() => setSubmitting(false));
  };

  const handleDeleteRoom = (roomId) => {
    fetch(`http://localhost:3001/api/adminPanel/rooms/deleteroom/${roomId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setRooms(rooms.filter((room) => room.id !== roomId));
        } else {
          console.error('Failed to delete room');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  const handleAddCourse = (values, { setSubmitting, resetForm }) => {
    setCourses([...courses, values]);
    resetForm();
    setSubmitting(false);
  };

  const handleAddTeacher = (values, { setSubmitting, resetForm }) => {
    setTeachers([...teachers, values]);
    resetForm();
    setSubmitting(false);
  };

  const handleAddDepartment = (values, { setSubmitting, resetForm }) => {
    setDepartment([...department, values]);
    resetForm();
    setSubmitting(false);
  };

  const handleAddSession = (values, { setSubmitting, resetForm }) => {
    setSession([...session, values]);
    resetForm();
    setSubmitting(false);
  };

  const handleAddProgram = (values, { setSubmitting, resetForm }) => {
    setProgram([...program, values]);
    resetForm();
    setSubmitting(false);
  };

  const handleAddAvailableRoom = (values, { setSubmitting, resetForm }) => {
    setAvailableRoom([...availableRoom, values]);
    resetForm();
    setSubmitting(false);
  };

  const handleAddSection = (values, { setSubmitting, resetForm }) => {
    setSection([...section, values]);
    resetForm();
    setSubmitting(false);
  };

  const handleAddCurrentSession = (values, { setSubmitting, resetForm }) => {
    setCurrentSession([...currentSession, values]);
    resetForm();
    setSubmitting(false);
  };

  const handleAddOfferedSubject = (values, { setSubmitting, resetForm }) => {
    setOfferedSubject([...offeredSubject, values]);
    resetForm();
    setSubmitting(false);
  };

  const handleButtonClick = async (action) => {
    if (action === 'View Rooms') {
      try {
        // Retrieve token from local storage
        const token = localStorage.getItem('authToken');
        console.log('Retrieved token:', token); // Log token for debugging
  
        // Check if token exists
        if (!token) {
          console.error('No authentication token found.');
          return;
        }
  
        // Fetch rooms from the server
        const response = await fetch('http://localhost:3001/api/adminPanel/rooms/allrooms', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include the token in the header
          },
        });
  
        // Check response status
        if (!response.ok) {
          if (response.status === 401) {
            console.error('Unauthorized request - token may be invalid or expired.');
            alert('Unauthorized request. Please log in again.');
          } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return;
        }
  
        // Parse response data
        const data = await response.json();
        setRooms(data); // Store the fetched rooms
        rooms(true); // Toggle the view to show rooms
      } catch (error) {
        console.error('Error fetching rooms:', error);
        alert('Failed to fetch rooms. Please try again.');
      }
    }
  };
  
  
  

  
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'black', zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          {isSmallScreen && (
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" color="goldenrod" component="div" sx={{ flexGrow: 1 }}>
            <SchoolIcon />
            Islamia College
          </Typography>
          <Button
            color="inherit"
            sx={{
              backgroundColor: 'gold',
              color: 'black',
              '&:hover': { backgroundColor: 'darkgoldenrod' },
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex' }}>
        <Drawer
          variant={isSmallScreen ? 'temporary' : 'permanent'}
          open={isSmallScreen ? drawerOpen : true}
          onClose={handleDrawerToggle}
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 240,
              boxSizing: 'border-box',
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        >
          <List>
            {menuItems.map((text) => (
              <ListItem
                button
                key={text.label}
                sx={{ '&:hover': { color: 'goldenrod' } }}
                onClick={() => handleMenuItemClick(text)}
              >
                <ListItemText primary={text.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3, minHeight: '100vh' }}>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Admin Panel
          </Typography>

          <ViewButtonsGrid handleButtonClick={handleButtonClick} />

          {selectedMenuItem === 'View Rooms' && (
            <>
              <RoomTable rooms={rooms} onDeleteRoom={handleDeleteRoom} />
            </>
          )}
          {selectedMenuItem === 'Add Rooms' && <RoomForm onAddRoom={handleAddRoom} />}
          {selectedMenuItem === 'Delete Room' && (
            <>
              <Typography variant="h6" sx={{ textAlign: 'center', mt: 4, mb: 2 }}>
                Select a room to delete
              </Typography>
              <RoomTable rooms={rooms} onDeleteRoom={handleDeleteRoom} />
            </>
          )}

          {selectedMenuItem === 'View Courses' && courses.length > 0 && <CourseTable courses={courses} />}
          {selectedMenuItem === 'Add Course' && <CourseForm onAddCourse={handleAddCourse} />}

          {selectedMenuItem === 'View Teacher' && teachers.length > 0 && <TeacherTable teachers={teachers} />}
          {selectedMenuItem === 'Add Teacher' && <TeacherForm onAddTeacher={handleAddTeacher} />}

          {selectedMenuItem === 'View Department' && department.length > 0 && <DepartmentTable department={department} />}
          {selectedMenuItem === 'Add Department' && <DepartmentForm onAddDepartment={handleAddDepartment} />}

          {selectedMenuItem === 'View Session' && session.length > 0 && <SessionTable session={session} />}
          {selectedMenuItem === 'Add Session' && <SessionForm onAddSession={handleAddSession} />}

          {selectedMenuItem === 'View Program' && program.length > 0 && <ProgramTable program={program} />}
          {selectedMenuItem === 'Add Program' && <ProgramForm onAddProgram={handleAddProgram} />}

          {selectedMenuItem === 'View Available Rooms' && availableRoom.length > 0 && <AvailableTable availableRoom={availableRoom} />}
          {selectedMenuItem === 'Add Available Rooms' && <AvailableRoomForm onAddAvailableRoom={handleAddAvailableRoom} />}

          {selectedMenuItem === 'View Section' && section.length > 0 && <SectionTable section={section} />}
          {selectedMenuItem === 'Add Section' && <SectionForm onAddSection={handleAddSection} />}

          {selectedMenuItem === 'View Current Sessions' && currentSession.length > 0 && <CurrentSessionTable currentSession={currentSession} />}
          {selectedMenuItem === 'Add Current Session' && <CurrentSessionForm onAddCurrentSession={handleAddCurrentSession} />}

          {selectedMenuItem === 'View Offered Subject' && offeredSubject.length > 0 && <OfferedSubjectTable offeredSubject={offeredSubject} />}
          {selectedMenuItem === 'Add Offered Subject' && <OfferedSubjectForm onAddOfferedSubject={handleAddOfferedSubject} />}

         
        </Box>
      </Box>
    </>
  );
};

export default Admin;
