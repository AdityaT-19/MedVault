import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField, Button, Container, Card, Grid, InputAdornment } from '@mui/material';
import { AddCircleOutline as AddCircleOutlineIcon, Business, LocationOn } from '@mui/icons-material';

const AddHospital = () => {
  const [formData, setFormData] = useState({
    hospital_name: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://medvault-yzpz.onrender.com/hospital/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response.status);
      if (response.ok) {
        toast.success('Hospital added successfully!');
        // Handle success or redirect as needed
      } else {
        console.error('Error submitting form:', response.status);
        toast.error('Error adding hospital. Please try again.');
        // Handle error, show a message, etc.
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error adding hospital. Please try again.');
      // Handle error, show a message, etc.
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Card sx={{ p: 4 }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Hospital</h2>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                label="Hospital Name"
                variant="outlined"
                fullWidth
                name="hospital_name"
                value={formData.hospital_name}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Business />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Location"
                variant="outlined"
                fullWidth
                name="location"
                value={formData.location}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddCircleOutlineIcon />}
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      </Card>
    </Container>
  );
};

export default AddHospital;


