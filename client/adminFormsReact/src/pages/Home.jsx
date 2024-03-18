import React from 'react';

const dashboardStyle = {
  textAlign: 'center',
  padding: '40px',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  margin: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  color: '#343a40',
  marginBottom: '20px',
};

const textStyle = {
  color: '#555',
  lineHeight: '1.6',
  fontSize: '16px',
};

const keyFeaturesStyle = {
  marginTop: '30px',
};

const featureItemStyle = {
  marginBottom: '10px',
  textAlign: 'left',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const linkHoverStyle = {
  textDecoration: 'underline',
};

function Dashboard() {
  return (
    <div style={dashboardStyle}>
      <h2 style={headingStyle}>Welcome to UHS - Your One-Stop Healthcare Solution!</h2>
      <p style={textStyle}>
        Explore the features and functionalities available in our system to manage healthcare-related data efficiently.
      </p>
      <div style={keyFeaturesStyle}>
        <h3 style={headingStyle}>Key Features:</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={featureItemStyle}>Register Users, Doctors, Technicians, Insurance Companies, and Hospitals.</li>
          <li style={featureItemStyle}>Access and manage patient data, medical histories, and prescriptions.</li>
          <li style={featureItemStyle}>Generate and view lab reports for patients.</li>
          <li style={featureItemStyle}>Track and manage health schemes and insurance policies.</li>
        </ul>
      </div>
      <p style={textStyle}>
        For any assistance or queries, please contact our support team <span style={linkStyle}>here</span>.
      </p>
      {/* Add more dashboard content and information here */}
    </div>
  );
}

export default Dashboard;


