import React from 'react';
import { Button, Grid } from '@mui/material';
import { Room as RoomIcon } from '@mui/icons-material';

const ViewRoom = ({ handleButtonClick }) => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
      <Grid item>
        <Button
          variant="contained"
          startIcon={<RoomIcon sx={{ fontSize: 20 }} />}  // Decreased icon size
          onClick={() => handleButtonClick('View Rooms')}
          sx={{
            backgroundColor: 'black',
            color: 'white',
            padding: '7px 30px 7px 30px', // Decreased padding
            fontSize: '1.7rem',   // Decreased font size
            '&:hover': { backgroundColor: 'white', color: 'black' },
          }}                                 
        >
          View Rooms
        </Button>
      </Grid>
    </Grid>
  );
};

export default ViewRoom;
