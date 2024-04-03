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
    
    const companyId = 'your_company_id'; // Replace with the actual company id
    
    try {
      const response = await fetch(`https://medvault-yzpz.onrender.com/insurance/add/${companyId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Optionally, you can redirect or perform other actions upon successful form submission
      } else {
        console.error('Form submission failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Insurance Details</h2>

      <label>
        Insurance Policy No:
        <input
          type="text"
          name="insurance_policy_no"
          value={formData.insurance_policy_no}
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label>
        Patient UUID:
        <input
          type="text"
          name="patient_uuid"
          value={formData.patient_uuid}
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label>
        Insurance Policy Name:
        <input
          type="text"
          name="insurance_policy_name"
          value={formData.insurance_policy_name}
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label>
        Sum Assured:
        <input
          type="number"
          name="sum_assured"
          value={formData.sum_assured}
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label>
        Number of Premiums:
        <input
          type="number"
          name="number_of_premiums"
          value={formData.number_of_premiums}
          onChange={(e) => handleChange(e)}
        />
      </label>

      <h2>Nominee Details</h2>

      {formData.nominee_details.map((nominee, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <label>
            Nominee Name:
            <input
              type="text"
              name="nominee_name"
              value={nominee.nominee_name}
              onChange={(e) => handleChange(e, index)}
            />
          </label>

          <label>
            Nominee Relationship:
            <input
              type="text"
              name="nominee_relationship"
              value={nominee.nominee_relationship}
              onChange={(e) => handleChange(e, index)}
            />
          </label>

          <button type="button" onClick={() => removeNominee(index)}>
            Remove Nominee
          </button>
        </div>
      ))}

      <button type="button" onClick={addNominee}>
        Add Nominee
      </button>

      <button type="submit">Submit</button>
    </form>
  );
};

export default InsuranceDetailsForm;

