import React, { useState } from 'react';
import { AppBar, Box, Button, Drawer, IconButton, Modal, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginForm from '../LoginForm';
import '../../styles/HomeStyle.css';
import timeicon from '../../images/timeicon.png';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const handleLoginOpen = () => {
        setLoginOpen(true);
    };

    const handleLoginClose = () => {
        setLoginOpen(false);
    };

    const validateInputs = () => {
        const nameIsValid = /^[A-Z][a-zA-Z]*$/.test(name);
        const emailIsValid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
        const passwordIsValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/.test(password);
        return nameIsValid && emailIsValid && passwordIsValid;
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                textAlign: 'center',
                backgroundColor: 'black',
                color: 'white',
                height: '100%',
                py: 2,
            }}
        >
            <ul className="mobile-navigation">
                <li>
                    <Button onClick={() => handleScrollToSection('home-section')} sx={{ color: 'white', fontWeight: 'bold' }}>
                        Home
                    </Button>
                </li>
                <li>
                    <Button onClick={() => handleScrollToSection('about-section')} sx={{ color: 'white', fontWeight: 'bold' }}>
                        About
                    </Button>
                </li>
                <li>
                    <Button onClick={() => handleScrollToSection('timetable-section')} sx={{ color: 'white', fontWeight: 'bold' }}>
                        Timetable
                    </Button>
                </li>
                <li>
                    <Button onClick={() => handleScrollToSection('blogs-section')} sx={{ color: 'white', fontWeight: 'bold' }}>
                        Blogs
                    </Button>
                </li>
                <li>
                    <Button
                        onClick={handleLoginOpen}
                        sx={{ color: 'white', fontWeight: 'bold' }}
                        disabled={!validateInputs}
                    >
                        Login
                    </Button>
                </li>
            </ul>
        </Box>
    );

    return (
        <>
            <Box>
                <AppBar component="nav" sx={{ bgcolor: 'black', px: 4, height: '80px' }}>
                    <Toolbar sx={{ padding: '0 24px', minHeight: '100px' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{ mr: 2, display: { sm: 'none' } }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>

                        <img src={timeicon} alt="Time Icon" style={{
                             width: '280px', height: '250px',
                                marginTop: '5px', 
                                marginBottom: '-20px', 
                                marginRight: '200px', 
                                marginLeft: '10px',
                                alignSelf: 'center',
                              }} />

                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className="navigation-menu" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
                                <li>
                                    <Button
                                        sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            '&:hover': { color: 'goldenrod' },
                                            mx: 2,
                                        }}
                                        onClick={() => handleScrollToSection('home-section')}
                                    >
                                        Home
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            '&:hover': { color: 'goldenrod' },
                                            mx: 2,
                                        }}
                                        onClick={() => handleScrollToSection('about-section')}
                                    >
                                        About
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            '&:hover': { color: 'goldenrod' },
                                            mx: 2,
                                        }}
                                        onClick={() => handleScrollToSection('timetable-section')}
                                    >
                                        Timetable
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            '&:hover': { color: 'goldenrod' },
                                            mx: 2,
                                        }}
                                        onClick={() => handleScrollToSection('blogs-section')}
                                    >
                                        Blogs
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        onClick={handleLoginOpen}
                                        variant="contained"
                                        sx={{
                                            backgroundColor: 'goldenrod',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            '&:hover': { backgroundColor: 'darkgoldenrod' },
                                            mx: 2,
                                        }}
                                    >
                                        Login
                                    </Button>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>

                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        anchor="bottom"  // Drawer opens from the bottom
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: '100%',
                                height: '250px',
                                bottom: '0px',
                                backgroundColor: 'black',
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>

            {/* Modal for login */}
            <Modal open={loginOpen} onClose={handleLoginClose}>
                <Box
                    sx={{
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundImage: 'url(/path/to/your/background-image.jpg)', 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                    }}
                >
                    <LoginForm
                        onClose={handleLoginClose}
                        setName={setName}
                        setEmail={setEmail}
                        setPassword={setPassword}
                    />
                </Box>
            </Modal>
        </>
    );
};

export default Header;
