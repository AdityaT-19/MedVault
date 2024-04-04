import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const MainPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
  };

  return (
    <div>
      {/* NavBar */}
      <AppBar position="static">
        <Toolbar>
        <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{ flexGrow: 1, color: 'white' }} // Added color: 'white'
          >
            MedVault
          </Typography>
          <Button component={NavLink} to="/addUser" color="inherit">Add User</Button>
          <Button component={NavLink} to="/addDoctor" color="inherit">Add Doctor</Button>
          <Button component={NavLink} to="/addTechnician" color="inherit">Add Technician</Button>
          <Button component={NavLink} to="/addInsuranceCompany" color="inherit">Add Insurance Company</Button>
          <Button component={NavLink} to="/addHospital" color="inherit">Add Hospital</Button>
          <Button component={NavLink} to="/addEMT" color="inherit">Add EMT</Button>
          <Button component={NavLink} to="/addInsurance" color="inherit">Add Insurance</Button>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <main>
        <Container sx={{ mt: 4, mb: 8 }}> {/* Increased bottom margin */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Typography variant="h1">Welcome to MedVault</Typography>
              <Typography variant="body1">
                MedVault (Your One-Stop Healthcare Solution) is a comprehensive platform designed to streamline healthcare management.
              </Typography>
              <Typography variant="body1">
                With MedVault, you can easily manage patient data, prescriptions, lab reports, and much more.
              </Typography>
              <Typography variant="body1">
                Get started today by exploring the features available in our system and discover how MedVault can revolutionize healthcare management for you.
              </Typography>
              {/* Additional paragraph */}
              <Typography variant="body1" sx={{ mt: 2 }}>
                Our dedicated team is constantly working to enhance your experience and provide the best possible solutions for your healthcare needs.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <footer>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Container>
              <Typography variant="body1" color="inherit">&copy; 2024 MedVault. All rights reserved.</Typography>
            </Container>
          </Toolbar>
        </AppBar>
      </footer>
    </div>
  );
};

export default MainPage;

