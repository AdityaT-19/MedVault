import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
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
      date_of_test: '',
      sub_test_reports: {
        path: '',
        added_date: '',
      },
      doctor_id: '',
      techinican_id: '',
    },
    bloodGroup: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

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
    <div className="form-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px', width: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <label>
        Profile Image:
        <input type="text" name="profile_image" value={formData.profile_image} onChange={handleChange} />
      </label>

      <label>
        User Name:
        <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} />
      </label>

      {/* Add more input fields for other basic information */}

      {/* Emergency Details */}
      <label>
        Emergency Contact Name:
        <input type="text" name="emergency_details.emergency_contact_name" value={formData.emergency_details.emergency_contact_name} onChange={handleChange} />
      </label>

      <label>
        Emergency Phone Number:
        <input type="text" name="emergency_details.emergency_phone_no" value={formData.emergency_details.emergency_phone_no} onChange={handleChange} />
      </label>
          
          <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </div>
  );
};

export default SignUpForm;

