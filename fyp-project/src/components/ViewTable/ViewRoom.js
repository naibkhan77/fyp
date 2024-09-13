import React from 'react';
import { Button, Grid } from '@mui/material';
import { Room as RoomIcon } from '@mui/icons-material';

const ViewRoom = ({ handleButtonClick }) => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
      <Grid item>
        <Button
          variant="contained"
          startIcon={<RoomIcon sx={{ fontSize: 30 }} />} 
          onClick={() => handleButtonClick('View Rooms')}
          sx={{
            backgroundColor: 'black',
            color: 'red',
            padding: '10px 16px', 
            fontSize: '1.2rem',
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
