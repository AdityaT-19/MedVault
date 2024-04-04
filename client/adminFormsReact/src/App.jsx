import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddDoctor from './pages/addDoctor';
import AddHospital from './pages/addHospital';
import AddInsuranceCompany from './pages/addInsuranceCompany';
import AddTechnician from './pages/addTechinician';
import SignUpForm from './pages/addUser';
import Dashboard from './pages/Home';
import AddEMT from './pages/addEMT';
import InsuranceDetailsForm from './pages/addInsurance';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addUser" element={<SignUpForm/>}/>
        <Route path='/addDoctor' element={<AddDoctor/>}/>
        <Route path='/addTechnician' element={<AddTechnician/>}/>
        <Route path='/addInsuranceCompany' element={<AddInsuranceCompany/>}/>
        <Route path='/addHospital' element={<AddHospital/>}/>
        <Route path='/addEMT' element={<AddEMT/>}/>
        <Route path='/addInsurance' element={<InsuranceDetailsForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
