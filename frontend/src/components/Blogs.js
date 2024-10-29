import React from 'react';

import dep1 from '../CardImages/sir1.jpeg'; 
import dep2 from '../CardImages/sir7.jpeg';
import dep3 from '../CardImages/sir3.jpeg';
import dep4 from '../CardImages/sir4.jpeg';
import masj from '../CardImages/sir8.png';
import dep6 from '../CardImages/sir6.jpeg';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';



const Blogs = () => {
    return (
        <>
    
       {/* Add Blogs Here   */}

       <Box id='blogs-section'
       
       sx={{ 
        mt: { xs: 4, md: 8 },  // Adding margin-top with different values for small and medium/large screens
        flexGrow: 1, 
        px: { xs: 2, md: 10 }, 
        py: { xs: 2, md: 5 } 
      }}
    >

        <Typography variant="h4" component="h2" sx={{ textAlign: 'center',   mb: -4, mt: 3 }}>
          Blogs
        </Typography>
        <Box  sx={{ flexGrow: 1, px: { xs: 2, md: 10 }, py: { xs: 2, md: 5 } }}>
        <Grid container spacing={4}>

          {/* First Card */}

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{p: 4}}>
            <Card sx={{ maxWidth: 345, mx: 'auto',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '1.4px 20px rgba(0, 0, 0, 0.2)',
            }
           }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image={dep1}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dr Shaukat Ali
                </Typography>
                <Typography> 	Assistant Professor </Typography>
                <Typography>  Computer Science </Typography>
                <Typography >
                  PhD (University of Peshawar)
                  Email: shaukat@icp.edu.pk
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Box>
        </Grid>

        {/* Second Card */}

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{p: 4}}>
          <Card sx={{ maxWidth: 345, mx: 'auto', 
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '1.4px 20px rgba(0, 0, 0, 0.2)',
            }
           }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image={dep2}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dr. Naveed Abbas
                </Typography>
                <Typography>Assistant Professor</Typography>
                <Typography>
                 BSCS (Double Gold Medalist), PhD 
                 Email: naveed.abbas@icp.edu.pk
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Box>
        </Grid>

        {/* Third Card */}
        
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{p: 4}}>
          <Card sx={{ maxWidth: 345, mx: 'auto', 
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '1.4px 20px rgba(0, 0, 0, 0.2)',
            }
           }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image={dep3}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Salahuddin
                </Typography>
                <Typography> 	Lecturer </Typography>
                <Typography>  Computer Science </Typography>
                <Typography>
                 BSCS (Hons), MPhil
                 Email: salahuddin@icp.edu.pk
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Box>
        </Grid>

        {/* Fourth Card */}

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{p: 4}}>
          <Card sx={{ maxWidth: 345, mx: 'auto', 
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '1.4px 20px rgba(0, 0, 0, 0.2)',
            }
           }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image={dep4}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mansoor Nasir
                </Typography>
                <Typography> Lecturer </Typography>
                <Typography>  Computer Science </Typography>
                <Typography >
                PhD (University of Peshawar)
                Email: 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Box> 
        </Grid>

        {/* Fifth Card */}

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{p: 4}}>
          <Card sx={{ maxWidth: 345, mx: 'auto', 
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '1.4px 20px rgba(0, 0, 0, 0.2)',
            }
           }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image={masj}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Tauseef Ur Rahman	
                </Typography>
                <Typography>	Lecturer</Typography>
                <Typography>Computer Science</Typography>
                <Typography >
                  MS-Web Engineering (UoP)
                  Email: tauseef@icp.edu.pk
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Box>
        </Grid>

        {/* Sixth Card */}

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{p: 4}}>
          <Card sx={{ maxWidth: 345, mx: 'auto', 
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '1.4px 20px rgba(0, 0, 0, 0.2)',
            }
           }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image={dep6}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Usman Ali Shah
                </Typography>
                <Typography>  Lecturer </Typography>
                <Typography>  Computer Science </Typography>
                <Typography >
                  PhD
                </Typography>
                <Typography> Email: usman@icp.edu.pk </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Box>
    {/* Blogs and Card here ends  */}

        </>
    )
}

export default Blogs
