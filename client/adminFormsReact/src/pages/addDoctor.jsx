import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <div className="container mt-5">
      <div className="card shadow p-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h2 className="text-center mb-4">Add Doctor</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="hospital_id" className="form-label">Hospital ID:</label>
            <input type="text" className="form-control" id="hospital_id" name="hospital_id" value={formData.hospital_id} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="doctor_name" className="form-label">Doctor Name:</label>
            <input type="text" className="form-control" id="doctor_name" name="doctor_name" value={formData.doctor_name} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age:</label>
            <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="sex" className="form-label">Sex:</label>
            <input type="text" className="form-control" id="sex" name="sex" value={formData.sex} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="speciality" className="form-label">Speciality:</label>
            <input type="text" className="form-control" id="speciality" name="speciality" value={formData.speciality} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="department" className="form-label">Department:</label>
            <input type="text" className="form-control" id="department" name="department" value={formData.department} onChange={handleChange} />
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

export default AddDoctor;




