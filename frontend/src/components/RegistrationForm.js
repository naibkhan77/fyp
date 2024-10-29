import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [admin_name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send data to the API for registration
            await axios.post('http://localhost:3001/api/adminPanel/registerAdmin', {
                admin_name,
                email,
                password,
            });

            alert('Registration successful. You can now log in.');

            // If the form has a close action, trigger it (useful if inside a modal)
            if (onClose) {
                onClose();
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <Box
            sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '70vh', 
            }}
        >
            <Box
                component='form'
                onSubmit={handleSubmit}
                sx={{ 
                    width: 300, 
                    padding: 3, 
                    backgroundColor: 'white', 
                    borderRadius: 3, 
                    boxShadow: '4px 4px 15px rgba(0, 0, 0, 0.2)', // Default shadow to the right
                    transition: 'transform 0.3s, box-shadow 0.3s',  // Add transition effect here
                    '&:hover': {
                        transform: 'scale(1.05)',  // Scale on hover
                        boxShadow: '8px 8px 30px rgba(0, 0, 0, 0.3)',  // More pronounced shadow on hover
                    },
                }}
            >
                <Typography variant='h6'>Register Admin</Typography>

                {/* Name Field */}
                <TextField 
                    label="Name" 
                    value={admin_name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin='normal'
                />

                {/* Email Field */}
                <TextField 
                    label="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin='normal'
                    type='email'
                />

                {/* Password Field */}
                <TextField 
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}  
                    fullWidth
                    margin='normal'
                    type="password"
                />

                {/* Submit Button */}
                <Button 
                    type="submit"
                    variant='contained'
                    sx={{ 
                        marginTop: 2, 
                        backgroundColor: 'black', // Set button background color to black
                        color: 'white', // Set text color to white for contrast
                        '&:hover': {
                            backgroundColor: 'gray', // Optional: change hover color
                        },
                    }}
                    fullWidth
                >
                    Register
                </Button>
            </Box>
        </Box>
    );
};

export default RegisterForm; 
