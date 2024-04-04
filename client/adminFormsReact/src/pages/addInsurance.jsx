import React, { useState } from 'react';

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
    <div className="form-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px', width: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Insurance Details</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label>
            <span style={{ marginBottom: '5px', color: '#555' }}>Insurance Policy No:</span>
            <input type="text" name="insurance_policy_no" value={formData.insurance_policy_no} onChange={(e) => handleChange(e)} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            <span style={{ marginBottom: '5px', color: '#555' }}>Patient UUID:</span>
            <input type="text" name="patient_uuid" value={formData.patient_uuid} onChange={(e) => handleChange(e)} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            <span style={{ marginBottom: '5px', color: '#555' }}>Insurance Policy Name:</span>
            <input type="text" name="insurance_policy_name" value={formData.insurance_policy_name} onChange={(e) => handleChange(e)} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            <span style={{ marginBottom: '5px', color: '#555' }}>Sum Assured:</span>
            <input type="number" name="sum_assured" value={formData.sum_assured} onChange={(e) => handleChange(e)} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <label>
            <span style={{ marginBottom: '5px', color: '#555' }}>Number of Premiums:</span>
            <input type="number" name="number_of_premiums" value={formData.number_of_premiums} onChange={(e) => handleChange(e)} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>

          <h2>Nominee Details</h2>

          {formData.nominee_details.map((nominee, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
              <label>
                Nominee Name:
                <input type="text" name="nominee_name" value={nominee.nominee_name} onChange={(e) => handleChange(e, index)} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
              </label>

              <label>
                Nominee Relationship:
                <input type="text" name="nominee_relationship" value={nominee.nominee_relationship} onChange={(e) => handleChange(e, index)} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
              </label>
            </div>
          ))}

          <button type="button" onClick={addNominee} style={{ padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '10px' }}>Add Nominee</button>

          <button type="submit" style={{ padding: '10px', backgroundColor: '#28A745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default InsuranceDetailsForm;

