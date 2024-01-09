import React from 'react';
import { Typography, Grid } from '@mui/material';
import hero_image from '../../assets/images/home_hero_img.png';
import './styles.css'; 
import { useTheme } from '@mui/material/styles';

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Grid container className="hero-section" marginTop={10} marginBottom={10}>
      <Grid
        item
        xs={12}
        sm={6}
        className="hero-text-container"
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
      >
        <Typography
          variant='h2'
          className="hero-title"
          sx={{ fontWeight: '500', marginTop: '111px', marginLeft: '120px', fontSize: { sm: '64px' }, width: { xs: 294, sm: 'auto' } }}
        >
          Welcome to the <br /> world of <br />
          <span style={{ color: theme.palette.text.secondary, fontWeight: 'bold' }}>Ayurveda </span>
        </Typography>
        <Typography
          variant='h6'
          className="hero-description"
          sx={{ marginLeft: '120px', textAlign: {  sm: 'start' } }}
        >
          Here ancient wisdom meets modern <br /> technology
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        className="hero-image-container"
        sx={{
          padding: 3,
          background: `linear-gradient(to right, white 0%, white 30%, 30%, ${theme.palette.secondary.main} 100%)`,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <img src={hero_image} className="hero-image" alt="Hero" />
      </Grid>
    </Grid>
  );
};

export default HeroSection;

