import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <div className="container mt-5">
      <div className="card shadow p-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h2 className="text-center mb-4">Add Technician</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="hospital_id" className="form-label">Hospital ID:</label>
            <input type="text" className="form-control" id="hospital_id" name="hospital_id" value={formData.hospital_id} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age:</label>
            <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="sex" className="form-label">Sex:</label>
            <input type="text" className="form-control" id="sex" name="sex" value={formData.sex} onChange={handleChange} />
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

export default AddTechnician;




