import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography, InputAdornment } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AccountCircle, Email, Phone, Person, Home, EventNote, AddCircleOutline, Accessibility } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    // Initial state with nested objects
    profile_image: '',
    user_name: '',
    age: 0,
    sex: '',
    phone_no: '',
    email: '',
    emergency_details: {
      emergency_contact_name: '',
      emergency_phone_no: '',
    },
    address: '',
    aadhar_no: 0,
    bpl_no: 0,
    insurance_policy_no: '',
    health_scheme_data: {
      scheme_name: '',
      id: '',
    },
    medical_diseases: {
      disease_name: '',
      severity: '',
    },
    past_history: {
      disease_name: '',
      doctor_name: '',
    },
    treatments_history: {
      treatments: '',
      no_of_days: 0,
    },
    allergies: {
      allergy_name: '',
      severity: '',
    },
    prescriptions: {
      prescription_id: '',
      health_issue: '',
      suspected_disease: {
        disease_name: '',
        severity: '',
      },
      treatement_required: {
        treatments: '',
        no_of_days: 0,
      },
      follow_up: '',
      medicines: {
        name: '',
        dosage: '',
      },
      doctor_id: '',
    },
    lab_reports: {
      report_id: '',
      report_name: '',
      completed: false,
      type_of_test: '',
      date_of_test: Date('2022-01-01'), // Set default date
      sub_test_reports: [{
        path: '',
        added_date: Date('2020-01-01'), // Set default date
      }],
      doctor_id: '',
      technician_id: '',
    },
    medicines:{
      name:'',
      dosage:'0mg',
    },
    bloodGroup: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // If the field name includes '.', we need to handle nested objects
    if (name.includes('.')) {
      const [firstLevel, secondLevel] = name.split('.');
      setFormData({
        ...formData,
        [firstLevel]: {
          ...formData[firstLevel],
          [secondLevel]: value
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://medvault-yzpz.onrender.com/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "profile_image": "https://example.com/profile.jpg",
          "user_name": formData.user_name,
          "age":formData.age,
          "sex": formData.sex,
          "phone_no": formData.phone_no,
          "email": formData.email,
          "bloodGroup": formData.bloodGroup,
          "emergency_details": [
            {
              "emergency_contact_name": "Austa Laura",
              "emergency_phone_no": "123456789",
            }
          ],
          "address": formData.address,
          "aadhar_no":formData.aadhar_no,
          "bpl_no": formData.bpl_no,
          "health_scheme_data": [
            {
              "scheme_name": "National Health Insurance Scheme",
              "id": "NHIS12345"
            }
          ],
          "insurance_policy_no": formData.insurance_policy_no,
          "medical_diseases": [
            {
              "disease_name": "Diabetes",
              "severity": "Mild"
            }
          ],
          "past_history": [
            {
              "disease_name": "Asthma",
              "doctor_name": "Dr. Smith"
            }
          ],
          "treatments_history": [
            {
              "treatments": "Insulin therapy",
              "no_of_days": 30
            }
          ],
          "allergies": [
            {
              "allergy_name": "Peanuts",
              "severity": "Severe"
            }
          ],
          "prescriptions": [
            {
              "prescription_id": uuidv4().toString(),
              "health_issue": "High blood sugar",
              "suspected_disease": [
                {
                  "disease_name": "Diabetes",
                  "severity": "Moderate"
                }
              ],
              "treatement_required": [
                {
                  "treatments": "Diet and exercise",
                  "no_of_days": 90
                }
              ],
              "follow_up": "In 3 months",
              "medicines": [
                {
                  "name": "Metformin",
                  "dosage": "500mg twice daily"
                }
              ],
              "doctor_id": "DR123456"
            }
          ],
          "medicines": [
            {
              "name": "Aspirin",
              "dosage": "81mg daily"
            },
            {
                  "name": "Metformin",
                  "dosage": "500mg twice daily"
            }
          ],
          "lab_reports": [
            {
              "report_id": uuidv4().toString(),
              "report_name": "Blood test",
              "completed": true,
              "type_of_test": "CBC",
              "date_of_test": "2023-11-19",
              "sub_test_reports": [
                {
                  "path": "https://example.com/reports/cbc.pdf",
                  "added_date": "2023-11-19"
                }
              ],
              "doctor_id": "DR123456",
              "techinican_id": "TECH12345"
            }
          ]
        }),
      });
      console.log(response.status);
      if (response.ok) {
        const data = await response.json();
        toast.success(`User added successfully! User ID: ${data.uid}`);
        // Handle success or redirect as needed
      } else {
        console.error('Error submitting form:', response.status);
        toast.error('Error adding user. Please try again.');
        // Handle error, show a message, etc.
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error adding user. Please try again.');
      // Handle error, show a message, etc.
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {Object.entries(formData).map(([key, value]) => (
              <Grid item xs={12} key={key}>
                <TextField
                  label={key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')}
                  fullWidth
                  name={key}
                  value={typeof value === 'object' ? value[Object.keys(value)[0]] : value}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {getStartAdornment(key)}
                      </InputAdornment>
                    ),
                  }}
                  style={{ marginBottom: '15px' }}
                />
              </Grid>
            ))}
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px' }}
          >
            Submit
          </Button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </Container>
  );
};

// Function to get appropriate icon for each field
const getStartAdornment = (fieldName) => {
  switch (fieldName) {
    case 'profile_image':
      return <AccountCircle />;
    case 'user_name':
      return <Person />;
    case 'age':
      return <EventNote />;
    case 'sex':
      return <Accessibility />;
    case 'phone_no':
      return <Phone />;
    case 'email':
      return <Email />;
    case 'address':
      return <Home />;
    default:
      return <AddCircleOutline />;
  }
};

export default SignUpForm;



