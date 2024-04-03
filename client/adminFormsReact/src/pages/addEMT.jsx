import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const formStyle = {
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  borderRadius: '8px',
  width: '400px',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const AddEMT = () => {
  const [formData, setFormData] = useState({
    hospital_id: '',
    emt_name: '',
    emt_email: '',
    emt_phone_no: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://medvault-yzpz.onrender.com/emt/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(`EMT added successfully! EMT ID: ${data.uid}`);
        // Handle success or redirect as needed
      } else {
        console.error('Error submitting form:', response.status);
        toast.error('Error adding EMT. Please try again.');
        // Handle error, show a message, etc.
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error adding EMT. Please try again.');
      // Handle error, show a message, etc.
    }
  };

  return (
    <div style={formContainer}>
      <div style={formStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Add EMT</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label>
            <span style={{ marginBottom: '5px', color: '#555' }}>Hospital ID:</span>
            <input type="text" name="hospital_id" value={formData.hospital_id} onChange={handleChange} style={inputStyle} />
          </label>

          <label>
            <span style={{ marginBottom: '5px', color: '#555' }}>EMT Name:</span>
            <input type="text" name="emt_name" value={formData.emt_name} onChange={handleChange} style={inputStyle} />
          </label>

          <label>
            <span style={{ marginBottom: '5px', color: '#555' }}>EMT Email:</span>
            <input type="text" name="emt_email" value={formData.emt_email} onChange={handleChange} style={inputStyle} />
          </label>

          <label>
            <span style={{ marginBottom: '5px', color: '#555' }}>EMT Phone Number:</span>
            <input type="text" name="emt_phone_no" value={formData.emt_phone_no} onChange={handleChange} style={inputStyle} />
          </label>

          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </div>
  );
};

export default AddEMT;


