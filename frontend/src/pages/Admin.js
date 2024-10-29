import React, { useEffect, useState, useRef } from 'react';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
import CreateTimeTableForm from '../components/Form/CreateTimeTableForm';
import TeacherTableForm from '../components/Form/TeacherTableForm';
import RegisterForm from '../components/RegistrationForm';


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
  { label: 'TeacherTableForm', path: '/admin/TeacherTableForm' },
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);


  const roomTableRef = useRef(null);
  const courseTableRef = useRef(null);
  const teacherTableRef = useRef(null);
  const departmentTableRef = useRef(null);
  const sessionTableRef = useRef(null);
  const programTableRef = useRef(null);
  const availableRoomTableRef = useRef(null);
  const sectionTableRef = useRef(null);
  const currentSessionTableRef = useRef(null);
  const offeredSubjectTableRef = useRef(null);

  const addRoomFormRef = useRef(null);
  const addCourseFormRef = useRef(null);
  const addTeacherFormRef = useRef(null);
  const addDepartmentRef = useRef(null);
  const addSessionRef = useRef(null);
  const addProgramRef = useRef(null);
  const addAvailableRoomRef = useRef(null);
  const addSectionRef = useRef(null);
  const addCurrentSessionRef = useRef(null);
  const addOfferedSubjectRef = useRef(null);
  const createTimetableRef = useRef(null);
  const teacherTableFormRef = useRef(null);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear authentication token
    setIsLoggedIn(false); // Update login state
    navigate('/'); // Redirect to home/login page
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogin = () => {
    // Simulate login action for testing purposes
    localStorage.setItem('token', 'sampleToken');
    setIsLoggedIn(true);
  };


  const handleMenuItemClick = (text) => {
    setSelectedMenuItem(text.label);
    
    // Close the sidebar if in small screen
    if (isSmallScreen) {
      setDrawerOpen(false);
    }

    // Scroll to the corresponding section if "Add Rooms" is clicked
    if (text.label === 'Add Rooms') {
      const addRoomFormElement = addRoomFormRef.current; // Reference to the Add Room Form
      if (addRoomFormElement) {
        addRoomFormElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleRegisterClick = () => {
    setIsRegisterFormOpen(!isRegisterFormOpen);
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
    const token = localStorage.getItem('token');
    axios.post('http://localhost:3001/api/adminPanel/department/adddepartment', values, {
        headers: {
            'Content-Type': 'application/json',
            token: token,
        },
    })
    .then(response => { 
        setDepartment([...department, response.data]);
        resetForm();
    })
    .catch(error => {
        console.error('Error adding department:', error);
        alert(error.response ? error.response.data : 'Error adding department.');
    })
    .finally(() => setSubmitting(false));
};


const handleAddSession = (values, { setSubmitting, resetForm }) => {
  const token = localStorage.getItem('token');
  axios.post(' http://localhost:3001/api/adminPanel/session/addsession', values, {
      headers: {
          'Content-Type': 'application/json',
          token: token,
      },
  })
  .then(response => {
      setSession([...session, response.data]);
      resetForm();
  })
  .catch(error => {
      console.error('Error adding department:', error);
      alert(error.response ? error.response.data : 'Error adding department.');
  })
  .finally(() => setSubmitting(false));
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


  // For View Table scrolling down 
  useEffect(() => {
    if (selectedMenuItem === 'View Rooms' && roomTableRef.current) {
      roomTableRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'View Courses' && courseTableRef.current) {
      courseTableRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'View Teacher' && teacherTableRef.current) {
      teacherTableRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'View Department' && departmentTableRef.current) {
      departmentTableRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'View Session' && sessionTableRef.current) {
      sessionTableRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'View Program' && programTableRef.current) {
      programTableRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'View Available Rooms' && availableRoomTableRef.current) {
      availableRoomTableRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'View Section' && sectionTableRef.current) {
      sectionTableRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'View Current Session' && currentSessionTableRef.current) {
      currentSessionTableRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'View Offered Subject' && offeredSubjectTableRef.current) {
      offeredSubjectTableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedMenuItem]);


// For Add From scrolling down  
  useEffect(() => {
    if (selectedMenuItem === 'Add Rooms' && addRoomFormRef.current) {
      addRoomFormRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'Add Course' && addCourseFormRef.current) {
      addCourseFormRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'Add Teacher' && addTeacherFormRef.current) {
      addTeacherFormRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'Add Department' && addDepartmentRef.current) {
      addDepartmentRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'Add Session' && addSessionRef.current) {
      addSessionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'Add Program' && addProgramRef.current) {
      addProgramRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'Add Available Rooms' && addAvailableRoomRef.current) {
      addAvailableRoomRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'Add Section' && addSectionRef.current) {
      addSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'Add Current Session' && addCurrentSessionRef.current) {
      addCurrentSessionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'Add Offered Subject' && addOfferedSubjectRef.current) {
      addOfferedSubjectRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'Create Timetable' && createTimetableRef.current) {
      createTimetableRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedMenuItem === 'TeacherTableForm' && teacherTableFormRef.current) {
      teacherTableFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedMenuItem]);


  const handleButtonClick = (action) => {
    const token = localStorage.getItem('token');
    console.log('Retrieved token:', token);
  
    if (!token) {
      console.error('No authentication token found.');
      return;
    }
  
    if (action === 'View Rooms') {
      axios.get('http://localhost:3001/api/adminPanel/rooms/allrooms', {
        headers: {
          token: token,
        },
      })
        .then(response => {
          const data = response.data;
          setRooms(data);
          setSelectedMenuItem('View Rooms'); // Triggers scrolling after re-render
        })
        .catch(error => {
          console.error('Error fetching rooms:', error);
        });
    } else if (action === 'View Courses') {
      axios.get('http://localhost:3001/api/adminPanel/courses/allcourses', {
        headers: {
          token: token,
        },
      })
        .then(response => {
          const data = response.data;
          setCourses(data);
          setSelectedMenuItem('View Courses'); // Triggers scrolling after re-render
        })
        .catch(error => {
          console.error('Error fetching courses:', error);
        });
    } else if (action === 'View Teacher') {
      axios.get('http://localhost:3001/api/adminPanel/teachers/allteachers', {
        headers: {
          token: token,
        },
      })
        .then(response => {
          const data = response.data;
          setTeachers(data);
          setSelectedMenuItem('View Teacher'); // Triggers scrolling after re-render
        })
        .catch(error => {
          console.error('Error fetching teachers:', error);
        });
    } else if (action === 'View Department') {
      axios.get('http://localhost:3001/api/adminPanel/department/alldepartments', {
        headers: {
          token: token,
        },
      })
        .then(response => {
          const data = response.data;
          setDepartment(data);
          setSelectedMenuItem('View Department'); // Triggers scrolling after re-render
        })
        .catch(error => {
          console.error('Error fetching departments:', error);
        });
    } else if (action === 'View Session') {
      axios.get('http://localhost:3001/api/adminPanel/session/allsessions', {
        headers: {
          token: token,
        },
      })
        .then(response => {
          const data = response.data;
          setSession(data);
          setSelectedMenuItem('View Session'); // Triggers scrolling after re-render
        })
        .catch(error => {
          console.error('Error fetching sessions:', error);
        });
    } else if (action === 'View Program') {
      axios.get('http://localhost:3001/api/adminPanel/programs/allprograms', {
        headers: {
          token: token,
        },
      })
        .then(response => {
          const data = response.data;
          setProgram(data);
          setSelectedMenuItem('View Program'); // Triggers scrolling after re-render
        })
        .catch(error => {
          console.error('Error fetching programs:', error);
        });
    } else if (action === 'View AvailableRooms') {
      axios.get('http://localhost:3001/api/adminPanel/availableRooms/allavailablerooms', {
        headers: {
          token: token,
        },
      })
        .then(response => {
          const data = response.data;
          setAvailableRoom(data);
          setSelectedMenuItem('View Available Rooms'); // Triggers scrolling after re-render
        })
        .catch(error => {
          console.error('Error fetching available rooms:', error);
        });
    } else if (action === 'View Section') {
      axios.get('http://localhost:3001/api/adminPanel/section/allsections', {
        headers: {
          token: token,
        },
      })
        .then(response => {
          const data = response.data;
          setSection(data);
          setSelectedMenuItem('View Section'); // Triggers scrolling after re-render
        })
        .catch(error => {
          console.error('Error fetching sections:', error);
        });
    } else if (action === 'View CurrentSession') {
      axios.get('http://localhost:3001/api/adminPanel/semester/allsemesters', {
        headers: {
          token: token,
        },
      })
        .then(response => {
          const data = response.data;
          setCurrentSession(data);
          setSelectedMenuItem('View Current Session'); // Triggers scrolling after re-render
        })
        .catch(error => {
          console.error('Error fetching current session:', error);
        });
    } else if (action === 'View OfferedSubject') {
      axios.get('http://localhost:3001/api/adminPanel/offeredsubjects/allofferedsubjects', {
        headers: {
          token: token,
        },
      })
        .then(response => {
          const data = response.data;
          setOfferedSubject(data);
          setSelectedMenuItem('View Offered Subject'); // Triggers scrolling after re-render
        })
        .catch(error => {
          console.error('Error fetching offered subjects:', error);
        });
    }
  };


  // changes here   
  
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'black', zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          {isSmallScreen && (
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h5" color="goldenrod" component="div" sx={{ flexGrow: 1 }}>
            
           
          </Typography>

          {/* Register Admin Button */}
          {isLoggedIn && (
            <Button
              color="inherit"
              sx={{
                backgroundColor: 'gold',
                color: 'black',
                marginRight: '10px',
                '&:hover': { backgroundColor: 'darkgoldenrod' },
              }}
              onClick={handleRegisterClick}
            >
              Registeration
            </Button>
          )}
  
          {isLoggedIn ? (
            <Button
              color="inherit"
              sx={{
                backgroundColor: 'gold',
                color: 'black',
                '&:hover': { backgroundColor: 'darkgoldenrod' },
              }}
              onClick={handleLogout} // Correctly linked to the logout function
            >
              Logout
            </Button>
          ) : (
            <Button
              color="inherit"
              sx={{
                backgroundColor: 'gold',
                color: 'black',
                '&:hover': { backgroundColor: 'darkgoldenrod' },
              }}
              onClick={handleLogin} // Simulated login for testing (remove when implementing real login)
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
  
      <Box sx={{ display: 'flex', overflow: 'hidden' }}>
        {isLoggedIn && (
          <Box >
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
                pt: '100px', // Adjust this value to match the AppBar height
                overflow: 'hidden', // Prevent scrolling
              },
            }}
          >
            <List >                         
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
        </Box>
        )}

       {/* Main content Area  */}
        <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: 'hidden', minHeight: '100vh', display: 'flex',flexDirection: 'column' }}>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Admin Panel 
          </Typography>

          {/* Conditionally Render the Register Form */}
          {isRegisterFormOpen && <RegisterForm onClose={() => setIsRegisterFormOpen(false)} />}
  
          <ViewButtonsGrid handleButtonClick={handleButtonClick} />
  
      {/* Conditional Rendering Based on Selected Menu Item */}
      <div ref={roomTableRef} />
      {selectedMenuItem === 'View Rooms' && <RoomTable rooms={rooms} onDeleteRoom={handleDeleteRoom} />}

      <div ref={addRoomFormRef} />
      {selectedMenuItem === 'Add Rooms' && <RoomForm onAddRoom={handleAddRoom} />}
      {selectedMenuItem === 'Delete Room' && (
        <>
          <Typography variant="h6" sx={{ textAlign: 'center', mt: 4, mb: 2 }}>
            Select a room to delete
          </Typography>
          <RoomTable rooms={rooms} onDeleteRoom={handleDeleteRoom} />
        </>
      )}

      <div ref={courseTableRef} />
      {selectedMenuItem === 'View Courses' && courses.length > 0 && (
        <CourseTable courses={courses} />
      )}
      <div ref={addCourseFormRef} />
      {selectedMenuItem === 'Add Course' && <CourseForm onAddCourse={handleAddCourse} />}


      <div ref={teacherTableRef} />
      {selectedMenuItem === 'View Teacher' && teachers.length > 0 && <TeacherTable teachers={teachers} />}
      <div ref={addTeacherFormRef} />
      {selectedMenuItem === 'Add Teacher' && <TeacherForm onAddTeacher={handleAddTeacher} />}


      <div ref={departmentTableRef} />
      {selectedMenuItem === 'View Department' && department.length > 0 && <DepartmentTable department={department} />}

      {/*  */}
      <div ref={addDepartmentRef} />
     {selectedMenuItem === 'Add Department' && <DepartmentForm onAddDepartment={handleAddDepartment} />}

      <div ref={sessionTableRef} />
      {selectedMenuItem === 'View Session' && session.length > 0 && <SessionTable session={session} />}
      <div ref={addSessionRef} />
      {selectedMenuItem === 'Add Session' && <SessionForm onAddSession={handleAddSession} />}

      <div ref={programTableRef} />
      {selectedMenuItem === 'View Program' && program.length > 0 && <ProgramTable program={program} />}
      <div ref={addProgramRef} />
      {selectedMenuItem === 'Add Program' && <ProgramForm onAddProgram={handleAddProgram} />}

      <div ref={availableRoomTableRef} />
      {selectedMenuItem === 'View Available Rooms' && availableRoom.length > 0 && <AvailableTable availableRoom={availableRoom} />}
      <div ref={addAvailableRoomRef} />
      {selectedMenuItem === 'Add Available Rooms' && <AvailableRoomForm onAddAvailableRoom={handleAddAvailableRoom} />}

      <div ref={sectionTableRef} />
      {selectedMenuItem === 'View Section' && section.length > 0 && <SectionTable section={section} />}
      <div ref={addSectionRef} />
      {selectedMenuItem === 'Add Section' && <SectionForm onAddSection={handleAddSection} />}

      <div ref={currentSessionTableRef} />
      {selectedMenuItem === 'View Current Session' && currentSession.length > 0 && <CurrentSessionTable currentSession={currentSession} />}
      <div ref={addCurrentSessionRef} />
      {selectedMenuItem === 'Add Current Session' && <CurrentSessionForm onAddCurrentSession={handleAddCurrentSession} />}  

      <div ref={offeredSubjectTableRef} />
      {selectedMenuItem === 'View Offered Subject' && offeredSubject.length > 0 && <OfferedSubjectTable offeredSubject={offeredSubject} />}
      <div ref={addOfferedSubjectRef} />
      {selectedMenuItem === 'Add Offered Subject' && <OfferedSubjectForm onAddOfferedSubject={handleAddOfferedSubject} />}

      <div ref={createTimetableRef} />
       {selectedMenuItem === 'Create Timetable' && <CreateTimeTableForm onCreateTimetable={createTimetableRef} />}


      <div ref={teacherTableFormRef} />
     {selectedMenuItem === 'TeacherTableForm' && <TeacherTableForm teachers={teachers} />}

        </Box>
      </Box>
    </>
  );
  
};

export default Admin;
