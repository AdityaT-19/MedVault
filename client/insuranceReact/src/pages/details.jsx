import React from 'react';
import { Grid, Typography, Container, Paper } from '@mui/material';
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";

const InsuranceDetailsPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom align="center">
        Insurance Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ textAlign: 'center', padding: '10px' }}>
            <img src={image3} alt="Image 3" style={{ maxWidth: '80%', height: 'auto', borderRadius: '8px' }} />
            <Typography variant="body2" mt={1} fontSize="12px">Yearwise Split of Customers</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ textAlign: 'center', padding: '10px' }}>
            <img src={image4} alt="Image 4" style={{ maxWidth: '80%', height: 'auto', borderRadius: '8px' }} />
            <Typography variant="body2" mt={1} fontSize="12px">Analysis based on Policy Type.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ textAlign: 'center', padding: '10px' }}>
            <img src={image1} alt="Image 1" style={{ maxWidth: '80%', height: 'auto', borderRadius: '8px' }} />
            <Typography variant="body2" mt={1} fontSize="12px">Analysis based on Geographic Location</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ textAlign: 'center', padding: '10px' }}>
            <img src={image2} alt="Image 2" style={{ maxWidth: '80%', height: 'auto', borderRadius: '8px' }} />
            <Typography variant="body2" mt={1} fontSize="12px">Occupation of People who have taken insurance</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InsuranceDetailsPage;


