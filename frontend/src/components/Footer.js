import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Footer Here start */}
            <Box
                sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    py: { xs: 2, md: 4 },
                    px: { xs: 2, md: 10 },
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Get in Touch
                        </Typography>
                        <Button
                            onClick={scrollToTop}
                            sx={{
                                backgroundColor: 'gold',
                                color: 'black',
                                
                                '&:hover': {
                                    backgroundColor: '#d4af37', // Darker shade of gold for hover effect
                                    fontWeight: 'bold'
                                },
                                mt: 2,
                            }}
                        >
                            Scroll to Top
                        </Button>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        {/* Replacing Links with Typography to remove clickable behavior */}
                        <Typography sx={{ display: 'block', mt: 1, fontWeight: 'bold' }}>
                            Home
                        </Typography>
                        <Typography sx={{ display: 'block', mt: 1, fontWeight: 'bold' }}>
                            About
                        </Typography>
                        <Typography sx={{ display: 'block', mt: 1, fontWeight: 'bold' }}>
                            Blogs
                        </Typography>
                        <Typography sx={{ display: 'block', mt: 1, fontWeight: 'bold' }}>
                            Contact
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography sx={{  fontWeight: 'bold' }} variant="body2">
                            Phone: 091-9222093
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold' }} variant="body2">
                            Address: University Road Islamia College Peshawar
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            Email: registrar@icp.edu.pk
                        </Typography>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        textAlign: 'left',
                        mt: { xs: 2, md: 4 },
                        pt: { xs: 2, md: 4 },
                        borderTop: '2px solid gray',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                </Box>

                <Typography sx={{ fontWeight: 'bold' }} variant="body2" textAlign='center'>
                    © {new Date().getFullYear()} register@icp.edu.pk
                </Typography>
            </Box>
            {/* Footer here End */}
        </>
    );
};

export default Footer;
 