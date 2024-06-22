import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Alerts from '../../components/Common/Alerts';

// Define the interfaces for form data and validation errors
interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  message: string;
  title: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
    rememberMe: true,
  });

  const [validationErrors, setValidationErrors] = useState<Partial<LoginForm>>({});
  const [errors, setErrors] = useState<Partial<FormErrors>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors: Partial<LoginForm> = {};

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is invalid';
    }

    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(formData.password)
    ) {
      validationErrors.password = 'Password is invalid';
    }

    if (Object.keys(validationErrors).length > 0) {
      setValidationErrors(validationErrors);
      return;
    }

    // Simulate login logic (replace with actual login API call)
    try {
      // Example: Simulate API call for login
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) {
      //   throw new Error('Login failed');
      // }

      // Simulated successful login
      setFormData({ email: "", password: "", rememberMe: true });

      alert('Logged in successfully!'); // Replace with redirect or other logic
    } catch (error) {
      console.error('Error Logging in:', error);
      // Handle error, e.g., display an error message to the user
      setErrors({ title: 'Login Failed', message: 'Failed to Log in. Please try again.' });
    }
  };

  const isLoggedIn = false;

  return (
    <div className="container-sm p-5 m-5 bg-light rounded">
      {!isLoggedIn && (
        <>
          <h1 className="text-center font-weight-bold text-primary">Login</h1>
          {errors && errors.message && (
            <Alerts isError={true} title={errors.title} message={errors.message} />
          )}

          <form className="p-2" onSubmit={handleSubmit}>
            <div className="text-center mb-3">
              <p>Sign in with:</p>
              <button
                type="button"
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-facebook-f"></i>
              </button>

              <button
                type="button"
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-google"></i>
              </button>

              <button
                type="button"
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-twitter"></i>
              </button>

              <button
                type="button"
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>

            <p className="text-center">or:</p>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="email"
                id="loginName"
                name="email"
                className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="form-label" htmlFor="loginName">
                Email or username
              </label>
              {validationErrors.email && (
                <div className="invalid-feedback">
                  {validationErrors.email}
                </div>
              )}
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="password"
                id="loginPassword"
                name="password"
                className={`form-control ${validationErrors.password ? 'is-invalid' : ''}`}
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label className="form-label" htmlFor="loginPassword">
                Password
              </label>
              {validationErrors.password && (
                <div className="invalid-feedback">
                  {validationErrors.password}
                </div>
              )}
            </div>

            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="form-check mb-3 mb-md-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="loginCheck"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="loginCheck">
                    {' '}
                    Remember me{' '}
                  </label>
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-center">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block mb-4"
            >
              Log in
            </button>

            <div className="text-center">
              <p>
                Not a member ?
                <Link to="/register"> Register</Link>
              </p>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;