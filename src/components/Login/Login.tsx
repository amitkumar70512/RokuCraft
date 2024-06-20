import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
    rememberMe: true,
  });

  const [errors, setErrors] = useState<Partial<LoginForm>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
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
      setErrors(validationErrors);
      console.log('errors: ' + validationErrors);
      return;
    }

    // If there are no validation errors, proceed with form submission logic
    try {
      // Login User
      // redirect to home page

      // setFormData({ email: "", password: "", rememberMe: true });

      alert('Logged in successfully!');
    } catch (error) {
      console.error('Error Logging in:', error);
      // Handle error, e.g., display an error message to the user
      alert('Failed to Log in. Please try again.');
    }
  };

  const isLoggedIn = false;

  return (
    <div className="container-sm p-5 m-5 bg-light rounded">
      {!isLoggedIn && (
        <>
          <h1 className="text-center font-weight-bold text-primary">Login</h1>
          <form className="p-2">
            <div className="text-center mb-3">
              <p>Sign in with:</p>
              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-facebook-f"></i>
              </button>

              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-google"></i>
              </button>

              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-twitter"></i>
              </button>

              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>

            <p className="text-center">or:</p>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="loginName" className="form-control" />
              <label className="form-label" htmlFor="loginName">
								Email or username
              </label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="password"
                id="loginPassword"
                className="form-control"
              />
              <label className="form-label" htmlFor="loginPassword">
								Password
              </label>
            </div>

            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="form-check mb-3 mb-md-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="loginCheck"
                    checked
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
              data-mdb-button-init
              data-mdb-ripple-init
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
