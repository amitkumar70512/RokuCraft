import React, { useState } from 'react';
import { LoginWithGoogle } from '../../firebase/auth/WithGoogle';
import { RegisterWithEmail } from '../../firebase/auth/WithEmail';
import { Bot } from '../../firebase/interface';
import { RegisterForm } from '../Common/interface';
import { FormErrors } from '../Common/interface';
import Alerts from '../Common/Alerts';
import { Link, useNavigate } from 'react-router-dom';
import { startLoading, stopLoading } from '../../redux/actions/loadingActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

/*

Register Flow:

1. New User visits the register page.
2. User fills in the register form and clicks the "Sign Up" button.
3. Email and password are sent to the Firebase Authentication server.
4. Firebase Authentication creates a new user account, and returns a user object with id.
5. Take the user object and store it in the Firestore (bots) database with additional information.
6. Redirect the user to the home page.

- Password will be stored only in the firebase authentication server. Not the Firestore database (bots).


Register form fields:
- Name
- Username
- Email
- mobile (later in another update)
- Password
- Repeat password
- Terms and conditions checkbox

Fields Generated in background:
- id (Firebase Authentication)
- image (default image from Google), allow user to change it later
- isPremium (default false), true if coins > 0
- coins (default 0)
- isAdmin (default false)
- doc (date of creation)
- doe (date of expiry) -- 365 days from premium activation


*/

const Register: React.FC = () => {
	const dispatch = useDispatch<any>();
	const navigate = useNavigate();

	const [formData, setFormData] = useState<RegisterForm>({
		name: '',
		userName: '',
		email: '',
		password: '',
		repeatPassword: '',
		terms: true,
	});

	const [validationErrors, setValidationErrors] = useState<
		Partial<RegisterForm>
	>({});
	const [responseErrors, setResponseErrors] = useState<Partial<FormErrors>>({
		isError: true,
		title: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
		console.log(formData);
		const validationErrors: Partial<RegisterForm> = {};

		if (!formData.name.trim()) {
			validationErrors.name = 'Name is required';
		} else if (!/^[A-Za-z]+$/.test(formData.name)) {
			validationErrors.name = 'Name is invalid';
		}
		if (!formData.userName.trim()) {
			validationErrors.userName = 'Username is required';
		} else if (!/^[a-z0-9_.]{3,20}$/.test(formData.userName)) {
			validationErrors.userName = 'Username is invalid';
		}

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

		// will introduce this password restriction in upcoming legal notifications
		// } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/.test(formData.password)) {
		//   validationErrors.password = 'Must contain at least one lowercase, one uppercase, and one digit, and be at least 5 characters long.';
		// }

		if (!formData.repeatPassword.trim()) {
			validationErrors.repeatPassword = 'Repeat Password is required';
		} else if (formData.repeatPassword !== formData.password) {
			validationErrors.repeatPassword = 'Passwords do not match';
		}

		if (!formData.terms) {
			validationErrors.terms = 'Please agree to TCs';
			// show error message
		}

		if (Object.keys(validationErrors).length > 0) {
			setValidationErrors(validationErrors);
			return;
		}
		// proceed with form submission logic
		try {
			dispatch(startLoading());
			const response = await RegisterWithEmail(
				formData.email,
				formData.password,
				formData.userName
			);
			if (response.isSuccess) {
				setResponseErrors({
					isError: false,
					title: `Hi ${formData.name}! `,
					message: 'Registered successfully.',
				});
				if (response.user) {
					response.user.getIdToken()
						.then((idToken: string) => {
							// Store the ID token in localStorage
							localStorage.setItem('accessToken', idToken);
							console.log('Access token stored in localStorage');
						})
						.catch((error: any) => {
							console.error('Error retrieving ID token:', error);
							// Handle error as needed
						});
					localStorage.setItem('refreshToken', response.user.refreshToken);
					localStorage.setItem('uid', response.user.uid);
				}
				console.log('User created successfully:', response);

				// Reset form fields after successful submission
				setFormData({
					name: '',
					userName: '',
					email: '',
					password: '',
					repeatPassword: '',
					terms: true,
				});

				// Redirect  after a delay
				setTimeout(() => {
					navigateToLoginPage();
				}, 2000); // Example delay of 2 seconds
				// show loader
				//1. store this data into the bots database by adding additional fields & localStore & cookies

				//2. redirect to LOgin page
			} else {
				setResponseErrors({
					isError: true,
					title: 'Sorry! ',
					message: 'Trying Refreshing and Register again',
				});
			}

		} catch (error) {
			console.error('Error submitting form:', error);
			// Handle error, e.g., display an error message to the user
			alert('Failed to submit form. Please try again later.');
		} finally {
			dispatch(stopLoading()); // Ensure loading state is stopped regardless of success or failure
		}
	};

	const navigateToLoginPage = () => {
		dispatch(stopLoading());
		navigate("/login");
	};

	return (
		<div className='container-sm p-5 m-5 bg-light rounded'>
			<>
				<h1 className='text-center font-weight-bold text-primary'>
					Register
				</h1>
				{responseErrors && responseErrors.message && (
					<Alerts
						isError={responseErrors.isError || false}
						title={responseErrors.title}
						message={responseErrors.message}
					/>
				)}
				<form className='p-2' onSubmit={handleSubmit}>
					<div className='text-center mb-3'>
						<p>Sign up with:</p>
						<button
							type='button'
							data-mdb-button-init
							data-mdb-ripple-init
							className='btn btn-link btn-floating mx-1'
						>
							<i className='fab fa-facebook-f'></i>
						</button>

						<button
							type='button'
							onClick={LoginWithGoogle}
							data-mdb-button-init
							data-mdb-ripple-init
							className='btn btn-link btn-floating mx-1'
						>
							<i className='fab fa-google'></i>
						</button>

						<button
							type='button'
							data-mdb-button-init
							data-mdb-ripple-init
							className='btn btn-link btn-floating mx-1'
						>
							<i className='fab fa-twitter'></i>
						</button>

						<button
							type='button'
							data-mdb-button-init
							data-mdb-ripple-init
							className='btn btn-link btn-floating mx-1'
						>
							<i className='fab fa-github'></i>
						</button>
					</div>

					<p className='text-center'>or:</p>

					<div data-mdb-input-init className='form-outline mb-4'>
						<input
							type='text'
							id='registerName'
							className={`form-control ${validationErrors.name ? 'is-invalid' : ''
								}`}
							name='name'
							value={formData.name}
							onChange={handleChange}
							required
						/>
						<label className='form-label' htmlFor='registerName'>
							Name
						</label>
						{validationErrors.name && (
							<div className='invalid-feedback'>{validationErrors.name}</div>
						)}
					</div>

					<div data-mdb-input-init className='form-outline mb-4'>
						<input
							type='text'
							name='userName'
							id='registerUsername'
							className={`form-control ${validationErrors.userName ? 'is-invalid' : ''
								}`}
							value={formData.userName}
							onChange={handleChange}
							required
						/>
						<label className='form-label' htmlFor='registerUsername'>
							Username
						</label>
						{validationErrors.userName && (
							<div className='invalid-feedback'>
								{validationErrors.userName}
							</div>
						)}
					</div>

					<div data-mdb-input-init className='form-outline mb-4'>
						<input
							type='email'
							id='registerEmail'
							className={`form-control ${validationErrors.email ? 'is-invalid' : ''
								}`}
							value={formData.email}
							name='email'
							onChange={handleChange}
							required
						/>
						<label className='form-label' htmlFor='registerEmail'>
							Email
						</label>
						{validationErrors.email && (
							<div className='invalid-feedback'>{validationErrors.email}</div>
						)}
					</div>

					<div data-mdb-input-init className='form-outline mb-4'>
						<input
							type='password'
							id='registerPassword'
							className={`form-control ${validationErrors.password ? 'is-invalid' : ''
								}`}
							name='password'
							value={formData.password}
							onChange={handleChange}
							required
						/>
						<label className='form-label' htmlFor='registerPassword'>
							Password
						</label>
						{validationErrors && (
							<div className='invalid-feedback'>
								{validationErrors.password}
							</div>
						)}
					</div>

					<div data-mdb-input-init className='form-outline mb-4'>
						<input
							type='password'
							id='registerRepeatPassword'
							className={`form-control ${validationErrors.repeatPassword ? 'is-invalid' : ''
								}`}
							name='repeatPassword'
							value={formData.repeatPassword}
							onChange={handleChange}
							required
						/>
						<label className='form-label' htmlFor='registerRepeatPassword'>
							Repeat password
						</label>
						{validationErrors.repeatPassword && (
							<div className='invalid-feedback'>
								{validationErrors.repeatPassword}
							</div>
						)}
					</div>

					<div className='form-check d-flex justify-content-center mb-4'>
						<input
							className='form-check-input me-2'
							type='checkbox'
							value=''
							id='registerCheck'
							defaultChecked
							aria-describedby='registerCheckHelpText'
						/>
						<label className='form-check-label' htmlFor='registerCheck'>
							I have read and agree to the terms
						</label>
					</div>

					<div className='text-center'>
						<button
							type='submit'
							data-mdb-button-init
							data-mdb-ripple-init
							className='btn btn-primary btn-block mb-3'
						>
							Sign up
						</button>
					</div>

					<div className='text-center'>
						<p>
							Already a member? <Link to='/login'>Login</Link>
						</p>
					</div>
				</form>
			</>
		</div>
	);
};

export default Register;
