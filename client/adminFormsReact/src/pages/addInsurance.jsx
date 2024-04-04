import React, { useState } from 'react';
import { TextField, Button, Container, Card, Grid, InputAdornment } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const InsuranceDetailsForm = () => {
  const [formData, setFormData] = useState({
    insurance_policy_no: '',
    patient_uuid: '',
    insurance_policy_name: '',
    sum_assured: 0,
    number_of_premiums: 0,
    nominee_details: [
      {
        nominee_name: '',
        nominee_relationship: '',
      },
    ],
  });

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      if (name === 'nominee_name' || name === 'nominee_relationship') {
        const updatedNominees = [...prevData.nominee_details];
        updatedNominees[index][name] = value;

        return {
          ...prevData,
          nominee_details: updatedNominees,
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  const addNominee = () => {
    setFormData((prevData) => ({
      ...prevData,
      nominee_details: [
        ...prevData.nominee_details,
        {
          nominee_name: '',
          nominee_relationship: '',
        },
      ],
    }));
  };

  const removeNominee = (index) => {
    setFormData((prevData) => {
      const updatedNominees = [...prevData.nominee_details];
      updatedNominees.splice(index, 1);

      return {
        ...prevData,
        nominee_details: updatedNominees,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Your form submission logic here
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Card sx={{ p: 4 }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Insurance Details</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <TextField
            label="Insurance Policy No"
            variant="outlined"
            fullWidth
            name="insurance_policy_no"
            value={formData.insurance_policy_no}
            onChange={(e) => handleChange(e)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  #
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Patient UUID"
            variant="outlined"
            fullWidth
            name="patient_uuid"
            value={formData.patient_uuid}
            onChange={(e) => handleChange(e)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  #
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Insurance Policy Name"
            variant="outlined"
            fullWidth
            name="insurance_policy_name"
            value={formData.insurance_policy_name}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            label="Sum Assured"
            variant="outlined"
            fullWidth
            type="number"
            name="sum_assured"
            value={formData.sum_assured}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            label="Number of Premiums"
            variant="outlined"
            fullWidth
            type="number"
            name="number_of_premiums"
            value={formData.number_of_premiums}
            onChange={(e) => handleChange(e)}
          />
          <h2>Nominee Details</h2>
          {formData.nominee_details.map((nominee, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
              <TextField
                label="Nominee Name"
                variant="outlined"
                fullWidth
                name="nominee_name"
                value={nominee.nominee_name}
                onChange={(e) => handleChange(e, index)}
              />
              <TextField
                label="Nominee Relationship"
                variant="outlined"
                fullWidth
                name="nominee_relationship"
                value={nominee.nominee_relationship}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          ))}
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={addNominee}
          >
            Add Nominee
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="success"
          >
            Submit
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default InsuranceDetailsForm;


