import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField, Button, Container, Card, Grid, InputAdornment } from '@mui/material';
import { AccountCircle, Business, Person, PeopleAlt, Cake, Wc, Work } from '@mui/icons-material';

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    hospital_id: '',
    doctor_name: '',
    age: 0,
    sex: '',
    speciality: '',
    department: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://medvault-yzpz.onrender.com/doctor/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(`Doctor added successfully! Doctor ID: ${data.uid}`);
        // Handle success or redirect as needed
      } else {
        console.error('Error submitting form:', response.status);
        toast.error('Error adding doctor. Please try again.');
        // Handle error, show a message, etc.
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error adding doctor. Please try again.');
      // Handle error, show a message, etc.
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Card sx={{ p: 4 }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Doctor</h2>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                label="Hospital ID"
                variant="outlined"
                fullWidth
                name="hospital_id"
                value={formData.hospital_id}
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
                label="Doctor Name"
                variant="outlined"
                fullWidth
                name="doctor_name"
                value={formData.doctor_name}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
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
                  startAdornment: (
                    <InputAdornment position="start">
                      <Cake />
                    </InputAdornment>
                  ),
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
                  startAdornment: (
                    <InputAdornment position="start">
                      <Wc />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Speciality"
                variant="outlined"
                fullWidth
                name="speciality"
                value={formData.speciality}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Work />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Department"
                variant="outlined"
                fullWidth
                name="department"
                value={formData.department}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PeopleAlt />
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

export default AddDoctor;






