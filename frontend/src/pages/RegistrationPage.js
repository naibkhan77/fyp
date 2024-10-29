import React from 'react';
import { Container, Typography } from '@mui/material';
import RegisterForm from '../components/RegistrationForm';


const RegistrationPage = () => {
    return (
        <>
        <RegisterForm />
        <Container 
            maxWidth="sm" 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                minHeight: '100vh' 
            }}
        >
            <Typography variant="h4" gutterBottom>
                Admin Registration
            </Typography>

            {/* Registration Form Component */}
            <RegisterForm onClose={() => console.log("Form closed")} />

        </Container>
        </>
    );
};

export default RegistrationPage;
