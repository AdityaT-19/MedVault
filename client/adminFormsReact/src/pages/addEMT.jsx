import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <div className="container mt-5">
      <div className="card shadow p-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h2 className="text-center mb-4">Add EMT</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="hospital_id" className="form-label">Hospital ID:</label>
            <input type="text" className="form-control" id="hospital_id" name="hospital_id" value={formData.hospital_id} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="emt_name" className="form-label">EMT Name:</label>
            <input type="text" className="form-control" id="emt_name" name="emt_name" value={formData.emt_name} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="emt_email" className="form-label">EMT Email:</label>
            <input type="text" className="form-control" id="emt_email" name="emt_email" value={formData.emt_email} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="emt_phone_no" className="form-label">EMT Phone Number:</label>
            <input type="text" className="form-control" id="emt_phone_no" name="emt_phone_no" value={formData.emt_phone_no} onChange={handleChange} />
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

export default AddEMT;
