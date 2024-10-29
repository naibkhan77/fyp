import React from 'react'; 
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

import islamia from '../images/icp.jpg';
import three from '../images/icp3.jpg';
import four from '../images/icp4.jpg';
import one from '../images/icp2.jpg';
import About from '../components/About';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';
import Timetable from '../components/Timetable';
import pic from '../images/atifsir.jpg'; 

const Home = () => {
  return (
    <>
      {/* Home start */}
      <Box 
        id='home-section'
        sx={{
          position: 'relative', 
          width: '100%', 
          height: 'auto', 
          pt: { xs: 4, md: 6 },  // Reduced padding-top
          pb: { xs: 10, md: 11 }, 
          overflow: 'hidden', 
          m: 0, // Remove default margin
        }}
      >
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={7000}
        >
          {/* Individual images in the carousel */}
          <Box 
            component="img" 
            src={islamia} 
            alt="Islamia College"
            sx={{
              width: '100%',
              height: { xs: '300px', sm: '400px', md: '600px' },  
              display: 'block',
              filter: 'brightness(50%)',
              borderTopLeftRadius: 5, // Top radius
              borderTopRightRadius: 5, // Top radius
              borderBottomLeftRadius: 0, // Remove bottom radius
              borderBottomRightRadius: 0, // Remove bottom radius
              marginTop: '0px',  // No margin-top for less space
            }}
          />
          <Box 
            component="img" 
            src={three} 
            alt="Second image"
            sx={{
              width: '100%',
              height: { xs: '300px', sm: '400px', md: '600px' },  
              display: 'block',
              filter: 'brightness(50%)',
              borderTopLeftRadius: 5, // Top radius
              borderTopRightRadius: 5, // Top radius
              borderBottomLeftRadius: 0, // Remove bottom radius
              borderBottomRightRadius: 0, // Remove bottom radius
              marginTop: '0px',  // No margin-top
            }}
          />
          <Box 
            component="img" 
            src={four} 
            alt="Third image"
            sx={{
              width: '100%',
              height: { xs: '300px', sm: '400px', md: '600px' },  
              display: 'block',
              filter: 'brightness(50%)',
              borderTopLeftRadius: 5, // Top radius
              borderTopRightRadius: 5, // Top radius
              borderBottomLeftRadius: 0, // Remove bottom radius
              borderBottomRightRadius: 0, // Remove bottom radius
              marginTop: '0px',  // No margin-top
              
            }}
          />
          <Box 
            component="img" 
            src={one} 
            alt="Fourth image"
            sx={{
              width: '100%',
              height: { xs: '300px', sm: '400px', md: '600px' },  
              display: 'block',
              filter: 'brightness(50%)',
              borderTopLeftRadius: 5, // Top radius
              borderTopRightRadius: 5, // Top radius
              borderBottomLeftRadius: 0, // Remove bottom radius
              borderBottomRightRadius: 0, // Remove bottom radius
              marginTop: '0px',  // No margin-top
            }}
          />
        </Carousel>

        {/* Overlay text for the carousel */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            padding: '10px',
            width: '80%', 
            maxWidth: '600px',
            borderRadius: '8px', 
            
          }}
        >
          <Typography variant="h3"
            sx={{
              fontSize: {
                xs: '1.0rem', 
                sm: '2rem', 
                md: '3rem', 
              },
              lineHeight: '1.2', 
            }}
          >
            <Box component='span' sx={{ whiteSpace: 'nowrap' }}>
            <Box component='span'>Welcome</Box> {' '}
            to {' '}
            <Box component='span' sx={{ color: 'gold' }}>
              Islamia College
            </Box>
          </Box>

          </Typography>
        </Box>
      </Box>
      {/* Home end */}

      {/* Card and image section */}
      <Box sx={{ flexGrow: 1, px: { xs: 3, md: 10 }, py: { xs: -1, md: 1 } }}>
        <Grid container spacing={4}>
          {/* Card */}
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '450px',  // Slightly larger height
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
                  height: '100%',  // Set equal height to match the image
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                  CHAIRMAN
                </Typography>
                <Typography variant="body2">
                  <Typography variant='h5' sx={{ fontWeight: 'bold', fontFamily:'-moz-initial'}}>
                    Dr. Atif Khan
                  </Typography>
                  <Typography vairant='body2'  sx={{ fontWeight: 'bold', fontSize: '22px', fontFamily:'-moz-initial'}}>
                  Department of Computer Science
                  Islamia College 
                  </Typography>
                  <Typography style={{ textAlign: 'justify', paddingTop: '8px' }}>
                  Welcome to our Timetable Management System. This platform represents our commitment to using technology to make scheduling efficient, accessible, and adaptable for all. By streamlining timetables, we aim to reduce conflicts and enhance productivity for students, faculty, and staff alike. We encourage everyone to make full use of this tool, as we strive to create a more organized and connected environment
                  </Typography>
                </Typography>
                
                <Box sx={{ borderBottom: '2px solid black', my: 2 }} />

                <Typography style={{ fontWeight: 'bold' }}>Email: atifkhan@icp.edu.pk</Typography>
                <Typography style={{ fontWeight: 'bold' }}>Cell No: +923339257326</Typography>
                
              </CardContent>
            </Card>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6}>
            <Box
                component="img"
              src={pic}
              alt="Another description of image"
              sx={{
                width: '100%',
                height: '450px',  // Larger height to match the card
                objectFit: 'cover',  // Ensure image covers the container
                borderRadius: 3,
                filter: 'brightness(100%)',  
                transition: 'transform 0.3s, box-shadow 0.3s',  // Add transition effect here
                    '&:hover': {
                    transform: 'scale(1.05)',  // Scale on hover
                    boxShadow: '1.4px 20px rgba(0, 0, 0, 0.2)',  // Add box-shadow on hover
                    },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* End of card and image section */}
      
      {/* Render additional components */}
      <About />  
      <Timetable />
      <Blogs />

      {/* Render Footer */}
      <Box sx={{ pt: 4 }}>
        <Footer /> 
      </Box>
    </>
  );
}

export default Home;
