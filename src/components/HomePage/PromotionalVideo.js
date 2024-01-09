import React from 'react';
import { Grid } from '@mui/material';
import './styles.css'; 

function PromotionalVideo() {
  return (
    <Grid className="promotional-video-container" xs={12} sx={{ height: { xs: '50vh', sm: '50vh', md: '70vh', lg: '70vh' }, backgroundColor: 'gray' }}>
      <h1>video</h1>
    </Grid>
  );
}

export default PromotionalVideo;

