import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const MainPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
  };

  return (
    <div>
      {/* NavBar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">UHS</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/">Dashboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/addUser">Add User</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/addDoctor">Add Doctor</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/addTechnician">Add Technician</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/addInsuranceCompany">Add Insurance Company</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/addHospital">Add Hospital</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/addEMT">Add EMT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/addInsurance">Add Insurance</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <h1>Welcome to UHS</h1>
            <p>
              UHS (Your One-Stop Healthcare Solution) is a comprehensive platform designed to streamline healthcare management.
            </p>
            <p>
              With UHS, you can easily manage patient data, appointments, prescriptions, lab reports, and much more.
            </p>
            <p>
              Get started today by exploring the features available in our system and discover how UHS can revolutionize healthcare management for you.
            </p>
          </div>
          {/* Masthead */}
          <header className="masthead">
            <div className="container position-relative">
              <div className="row justify-content-center">
                <div className="col-xl-6">
                  <div className="text-center text-white">
                    <h1 className="mb-5">Welcome to The Student's Guide</h1>
                    <form className="form-subscribe" id="contactForm" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col">
                          <input
                            className="form-control form-control-lg"
                            id="emailAddress"
                            type="text"
                            placeholder="Search for content that you want to explore"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <div className="invalid-feedback text-white">
                            {isSubmitted && !email && 'Please type something relevant'}
                          </div>
                        </div>
                        <div className="col-auto">
                          <button
                            className="btn btn-primary btn-lg disabled"
                            id="submitButton"
                            type="submit"
                            disabled={isSubmitted}
                          >
                            {isSubmitted ? 'Submitting...' : 'Submit'}
                          </button>
                        </div>
                      </div>
                      <div className={`text-center mb-3 ${isSubmitted ? '' : 'd-none'}`} id="submitSuccessMessage">
                        <div className="fw-bolder">Form submission successful!</div>
                        <p>To activate this form, sign up at</p>
                        <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">
                          https://startbootstrap.com/solution/contact-forms
                        </a>
                      </div>
                      <div className="text-center text-danger mb-3 d-none" id="submitErrorMessage">
                        Error sending message!
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Features section */}
          <section className="features-icons bg-light text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div className="features-icons-icon d-flex"><i className="bi-layers m-auto text-primary"></i></div>
                    <h3>Learning Path</h3>
                    <p className="lead mb-0">A Place where Highly Curated Content is Found!</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div className="features-icons-icon d-flex"><i className="bi-window m-auto text-primary"></i></div>
                    <h3>Previous Year Questions</h3>
                    <p className="lead mb-0">Featuring accurate solutions to previous year Questions!</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                    <div className="features-icons-icon d-flex"><i className="bi-terminal m-auto text-primary"></i></div>
                    <h3>Practice Problems</h3>
                    <p className="lead mb-0">Classic Problem set to test your understanding!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Useful Links */}
          <div className="col-md-4">
            <h3>Useful Links</h3>
            <ul className="list-group">
              <li className="list-group-item"><a href="/addUser">Add User</a></li>
              <li className="list-group-item"><a href="/addDoctor">Add Doctor</a></li>
              <li className="list-group-item"><a href="/addInsuranceCompany">Add Insurance Company</a></li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3">
        <div className="container">
          <p>&copy; 2024 UHS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
