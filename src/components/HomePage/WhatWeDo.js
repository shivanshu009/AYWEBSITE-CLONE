import { Grid, Typography } from '@mui/material';
import React from 'react';
import './styles.css';
import meditate from '../../assets/images/meditate.png';
import { useTheme } from '@mui/material/styles';

const WhatWeDo = () => {
    const theme = useTheme();

    return (
        <Grid container className='what-we-do-container fontBase' marginTop={10} marginBottom={10}>
            <Grid item container xs={12} sm={6} className='what-we-do-image-container' sx={{ padding: 3, background: `linear-gradient(to right,${theme.palette.secondary.main} 0%,${theme.palette.secondary.main} 70%,white 70%,white 100%)`, alignItems: 'center', justifyContent: 'center', display: "flex" }}>
                <img src={meditate} alt="Meditate" className='what-we-do-image' />
            </Grid>
            <Grid item container xs={12} sm={6} className='what-we-do-text-container' sx={{ alignItems: 'center', p: 2 }}>
                <Typography variant='subtitle' className='what-we-do-subtitle'>
                    Our mobile app is designed to help you discover the power of a holistic approach to health and wellness. With our app, you can learn about the benefits of adopting an Ayurvedic lifestyle and access expert guidance.
                </Typography>
                <Typography variant='h6' color={theme.palette.text.secondary} className='what-we-do-more-info' sx={{ textAlign: { xs: 'center', sm: 'start' } }}>
                    Know More{'>>'}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default WhatWeDo;
