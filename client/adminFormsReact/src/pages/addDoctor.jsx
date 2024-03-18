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
      const response = await fetch('http://localhost:3000/doctor/signup', {
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
    <div className="form-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px', width: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Add Doctor</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label>
            <span style={{ marginBottom: '5px', color: '#555' }}>Hospital ID:</span>
            <input type="text" name="hospital_id" value={formData.hospital_id} onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            <span style={{ marginBottom: '5px', color: '#555' }}>Doctor Name:</span>
            <input type="text" name="doctor_name" value={formData.doctor_name} onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            <span style={{ marginBottom: '5px', color: '#555' }}>Age:</span>
            <input type="number" name="age" value={formData.age} onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            <span style={{ marginBottom: '5px', color: '#555' }}>Sex:</span>
            <input type="text" name="sex" value={formData.sex} onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            <span style={{ marginBottom: '5px', color: '#555' }}>Speciality:</span>
            <input type="text" name="speciality" value={formData.speciality} onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            <span style={{ marginBottom: '5px', color: '#555' }}>Department:</span>
            <input type="text" name="department" value={formData.department} onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </div>
  );
};

export default AddDoctor;



