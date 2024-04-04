import React, { useState } from 'react';
import { TextField, Button, Container, Card, Typography, Grid, InputAdornment } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AccountCircle, Person, EventNote, Wc, AddCircleOutline as AddCircleOutlineIcon } from '@mui/icons-material';

const AddTechnician = () => {
  const [formData, setFormData] = useState({
    hospital_id: '',
    name: '',
    age: 0,
    sex: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://medvault-yzpz.onrender.com/labtechinician/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(`Technician added successfully! Technician ID: ${data.uid}`);
        // Handle success or redirect as needed
      } else {
        console.error('Error submitting form:', response.status);
        toast.error('Error adding technician. Please try again.');
        // Handle error, show a message, etc.
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error adding technician. Please try again.');
      // Handle error, show a message, etc.
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Card sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Add Technician
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Hospital ID"
                variant="outlined"
                fullWidth
                name="hospital_id"
                value={formData.hospital_id}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Person /></InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Age"
                variant="outlined"
                fullWidth
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><EventNote /></InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Sex"
                variant="outlined"
                fullWidth
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Wc /></InputAdornment>,
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            style={{ marginTop: '20px' }}
            startIcon={<AddCircleOutlineIcon />}
          >
            Submit
          </Button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      </Card>
    </Container>
  );
};

export default AddTechnician;





