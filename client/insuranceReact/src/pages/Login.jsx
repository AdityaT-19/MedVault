import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container, Box } from '@mui/material';

const InsuranceLogin = () => {
  const [insuranceUUID, setInsuranceUUID] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      navigate(`/home/${insuranceUUID}`);
      const response = await fetch('https://medvault-yzpz.onrender.com/insurance/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ insurance_uuid: insuranceUUID }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        console.log("entered here")
        navigate(`/home/${insuranceUUID}`);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred during login.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Insurance Company Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="insuranceUUID"
            label="Insurance UUID"
            name="insuranceUUID"
            autoFocus
            value={insuranceUUID}
            onChange={(e) => setInsuranceUUID(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          {message && (
            <Typography variant="body2" color="error" align="center">
              {message}
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default InsuranceLogin;
