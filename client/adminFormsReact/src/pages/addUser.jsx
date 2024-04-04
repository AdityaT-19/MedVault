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
      date_of_test: Date('01-01-2003'),
      sub_test_reports: [{
        path: '',
        added_date: Date('01-01-2003'),
      }],
      doctor_id: '',
      techinican_id: '',
    },
    medicines:{
      name:'NULL',
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
        body: JSON.stringify(formData),
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px', width: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label>
            Profile Image:
            <input type="text" name="profile_image" value={formData.profile_image} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            User Name:
            <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Age:
            <input type="number" name="age" value={formData.age} onChange={handleChange} min={0} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Phone Number:
            <input type="text" name="phone_no" value={formData.phone_no} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Aadhar Number:
            <input type="number" name="aadhar_no" value={formData.aadhar_no} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            BPL Number:
            <input type="number" name="bpl_no" value={formData.bpl_no} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Insurance Policy Number:
            <input type="text" name="insurance_policy_no" value={formData.insurance_policy_no} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Blood Group:
            <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Gender:
            <input type="text" name="sex" value={formData.sex} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Emergency Contact Name:
            <input type="text" name="emergency_details.emergency_contact_name" value={formData.emergency_details.emergency_contact_name} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Emergency Phone Number:
            <input type="text" name="emergency_details.emergency_phone_no" value={formData.emergency_details.emergency_phone_no} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Scheme Name:
            <input type="text" name="health_scheme_data.scheme_name" value={formData.health_scheme_data.scheme_name} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            ID:
            <input type="text" name="health_scheme_data.id" value={formData.health_scheme_data.id} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Disease Name:
            <input type="text" name="medical_diseases.disease_name" value={formData.medical_diseases.disease_name} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Severity:
            <input type="text" name="medical_diseases.severity" value={formData.medical_diseases.severity} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Disease Name:
            <input type="text" name="past_history.disease_name" value={formData.past_history.disease_name} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Doctor Name:
            <input type="text" name="past_history.doctor_name" value={formData.past_history.doctor_name} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Treatments:
            <input type="text" name="treatments_history.treatments" value={formData.treatments_history.treatments} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Number of Days:
            <input type="number" name="treatments_history.no_of_days" value={formData.treatments_history.no_of_days} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Allergy Name:
            <input type="text" name="allergies.allergy_name" value={formData.allergies.allergy_name} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Severity:
            <input type="text" name="allergies.severity" value={formData.allergies.severity} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Prescription ID:
            <input type="text" name="prescriptions.prescription_id" value={formData.prescriptions.prescription_id} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Health Issue:
            <input type="text" name="prescriptions.health_issue" value={formData.prescriptions.health_issue} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Suspected Disease Name:
            <input type="text" name="prescriptions.suspected_disease.disease_name" value={formData.prescriptions.suspected_disease.disease_name} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Suspected Disease Severity:
            <input type="text" name="prescriptions.suspected_disease.severity" value={formData.prescriptions.suspected_disease.severity} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Treatments:
            <input type="text" name="prescriptions.treatement_required.treatments" value={formData.prescriptions.treatement_required.treatments} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Number of Days for Treatment:
            <input type="number" name="prescriptions.treatement_required.no_of_days" value={formData.prescriptions.treatement_required.no_of_days} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Follow Up:
            <input type="text" name="prescriptions.follow_up" value={formData.prescriptions.follow_up} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Medicine Name:
            <input type="text" name="prescriptions.medicines.name" value={formData.prescriptions.medicines.name} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Medicine Dosage:
            <input type="text" name="prescriptions.medicines.dosage" value={formData.prescriptions.medicines.dosage} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Doctor ID:
            <input type="text" name="prescriptions.doctor_id" value={formData.prescriptions.doctor_id} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          {/* Lab Reports */}
          <h3>Lab Reports</h3>
          <label>
            Report ID:
            <input type="text" name="lab_reports.report_id" value={formData.lab_reports.report_id} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Report Name:
            <input type="text" name="lab_reports.report_name" value={formData.lab_reports.report_name} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Type of Test:
            <input type="text" name="lab_reports.type_of_test" value={formData.lab_reports.type_of_test} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Sub Test Reports Path:
            <input type="text" name="lab_reports.sub_test_reports[0].path" value={formData.lab_reports.sub_test_reports[0].path} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Doctor ID:
            <input type="text" name="lab_reports.doctor_id" value={formData.lab_reports.doctor_id} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Technician ID:
            <input type="text" name="lab_reports.techinican_id" value={formData.lab_reports.techinican_id} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </div>
  );
};

export default SignUpForm;
