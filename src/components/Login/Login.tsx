import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alerts from '../../components/Common/Alerts';
import { reauthenticateWithTokens, signInWithEmailAndPasswordFn } from '../../firebase/auth/WithEmail';
import { RootState } from '../../redux/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { startLoading } from '../../redux/actions/loadingActions';
import { stopLoading } from '../../redux/actions/loadingActions';
import { refreshBotUserName } from '../../redux/actions/botActions';
import { startLoggedIn, stopLoggedIn } from '../../redux/actions/loggedInActions';

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
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  // const userName = useSelector((state: RootState) => state.auth.displayName); // Fetch isLoading from Redux store
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
    rememberMe: true,
  });

  useEffect(() => {
    checkIfLoggedIn()
  }, [])

  useEffect(() => {
    if(isLoggedIn){
      dispatch(startLoggedIn());
    }else{
      dispatch(stopLoggedIn());
    }
  }, [isLoggedIn])

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
    } else if (!/^.{5,}$/.test(formData.password)) {
      validationErrors.password =
        'Password must be at least 5 characters long.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setValidationErrors(validationErrors);
      return;
    }

    // Simulate login logic (replace with actual login API call)
    try {
      dispatch(startLoading());
      console.log("user Success amit----------");
      // check if logged in based on saved Tokens
      const response = await signInWithEmailAndPasswordFn(formData.email, formData.password);
      if (response.isSuccess) {
        // Simulated successful login
        setFormData({ email: "", password: "", rememberMe: true });
        setIsLoggedIn(true);
        navigateToHomePage();
      } else {
        // Simulated failed login
        setFormData(prevFormData => ({
          ...prevFormData,
          password: "",
          rememberMe: true
        }));
        setIsLoggedIn(false);
        setErrors({ message: "UnKnown Issue occurred!" });
      }

    } catch (error) {
      setIsLoggedIn(false);
      console.error('Error Logging in:', error);
      // Handle error, e.g., display an error message to the user
      setErrors({ title: 'Login Failed', message: 'Failed to Log in. Please try again.' });
    } finally {
      dispatch(stopLoading());
    }
  };

  const navigateToHomePage = () => {
    setTimeout(() => {
      dispatch(refreshBotUserName());
      dispatch(startLoggedIn());
      dispatch(stopLoading());
      navigate("/home");
    }, 2000); // Example delay of 2 seconds
  };

  const checkIfLoggedIn = () => {
    dispatch(startLoading());
    // Check if tokens are stored in local storage
    const storedIdToken = localStorage.getItem('accessToken');
    const storedRefreshToken = localStorage.getItem('refreshToken');

    if (storedIdToken && storedRefreshToken) {
      reauthenticateWithTokens(storedIdToken, storedRefreshToken);// handle response for this
      
      console.log('User is logged in.');
      // Redirect to home page 
      navigateToHomePage();
    } else {
      dispatch(stopLoading());
      console.error('Tokens not found in local storage');
    }
  };

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
                type="text"
                id="loginName"
                name="email"
                className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="form-label" htmlFor="loginName">
                Email
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