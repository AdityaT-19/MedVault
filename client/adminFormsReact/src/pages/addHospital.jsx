import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <div className="container mt-5">
      <div className="card shadow p-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h2 className="text-center mb-4">Add Hospital</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="hospital_name" className="form-label">Hospital Name:</label>
            <input type="text" className="form-control" id="hospital_name" name="hospital_name" value={formData.hospital_name} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location:</label>
            <input type="text" className="form-control" id="location" name="location" value={formData.location} onChange={handleChange} />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-success btn-lg">Submit</button>
          </div>
        </form>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </div>
  );
};

export default AddHospital;


