import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'; 
import three from '../images/icp3.jpg'; 
import four from '../images/icp4.jpg';

const About = () => {
return (
    <>  
    {/* AboutUs Section in Card Format */}  
    <Box
        id="about-section"
        sx={{ flexGrow: 1, px: { xs: 3, md: 10 }, py: { xs: 2, md: 5 }, mt: { xs: 2, md: 8 } }}
    >
      <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
              {/* Card for Text Content */}

              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', textAlign: 'center', mb: '5px' }}>
                        About Us
                </Typography>

              <Card
                  sx={{ 
                    height: '350px',  // Slightly larger height
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    bgcolor: 'lightgray', 
                    borderRadius: 3, 
                    transition: 'transform 0.3s, box-shadow 0.3s',  // Add transition effect here
                    '&:hover': {
                    transform: 'scale(1.05)',  // Scale on hover
                    boxShadow: '1.4px 20px rgba(0, 0, 0, 0.2)',  // Add box-shadow on hover
                    },
                  }}
                >

                  <CardContent
                      sx={{
                          height: '100%', 
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          textAlign: 'center',
                      }}
                  >
                      
                      <Typography variant='h4' component='div' sx={{ fontFamily:'-moz-initial' }}>
                      "Time Table Management System"
                      </Typography>
                      <Box sx={{ borderBottom: '2px solid black', my: 2 }} />

                      <Typography variant="body1" style={{ textAlign: 'justify', paddingTop: '8px' }} >
                        is a web-based platform designed to simplify the process of creating and managing class schedules and room assignments. It enables administrators to efficiently allocate rooms based on class requirements, availability, and capacity. This system helps prevent scheduling conflicts, ensuring smooth and organized management of resources in educational institutions.
                      </Typography>
                      
                  </CardContent>
              </Card>
          </Grid>

          <Grid item xs={12} md={6}>
              {/* Box for Images without Background */}
              <Box
                  sx={{
                      position: 'relative',
                      width: '100%',
                      height: '450px',  // Match card height
                      display: 'flex',
                       justifyContent: 'center',
                      alignItems: 'center',
                  }}
              >
                  {/* First Image */}
                  <Box
                      component="img"
                      src={three}
                      alt="Main image description"
                      sx={{
                          width: '80%',
                          height: 'auto',
                          borderRadius: 2,
                          transition: 'transform 0.3s, box-shadow 0.3s',
                          '&:hover': {
                              transform: 'scale(1.05)',
                              boxShadow: '1.4px 20px rgba(0, 0, 0, 0.2)',
                          },
                      }}
                  />
                  {/* Overlapping Image */}
                  <Box
                      component="img"
                      src={four}
                      alt="Overlay image description"
                      sx={{
                          position: 'absolute',
                          top: '-5%',
                          left: '40%',
                          width: '55%',
                          height: 'auto',
                          borderRadius: 2,
                          transition: 'transform 0.3s, box-shadow 0.3s',
                          '&:hover': {
                              transform: 'scale(1.05)',
                              boxShadow: '1.4px 20px rgba(0, 0, 0, 0.2)',
                          },
                      }}
                  />
              </Box>
          </Grid>
      </Grid>
    </Box>
    </>
);
};

export default About;
