import React, { useState } from 'react';
import { Feedback } from '../../firebase/interface';
import {
	getAllFeedbacks,
	getFilteredFeedbacks,
	addFeedback,
} from '../../firebase/feedback';
import { FormErrors } from '../Common/interface';
import Alerts from '../Common/Alerts';

const Contact: React.FC = () => {
	const [formData, setFormData] = useState<Feedback>({
		name: '',
		email: '',
		message: '',
		timestamp: new Date().toISOString(),
	});

	const [validationErrors, setValidationErrors] = useState<Partial<Feedback>>(
		{}
	);
	const [responseAlert, setResponseAlert] = useState<Partial<FormErrors>>({
		isError: false,
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
		// Clear validation error if user starts typing again
		setValidationErrors((prevErrors) => ({
			...prevErrors,
			[name]: undefined,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Perform validation
		const validationErrors: Partial<Feedback> = {};
		if (!formData.name.trim()) {
			validationErrors.name = 'Name is required';
		} else if (!/^[A-Za-z ]+$/.test(formData.name)) {
			validationErrors.name = 'Name is invalid';
		}
		if (!formData.email.trim()) {
			validationErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			validationErrors.email = 'Email is invalid';
		}

		if (!formData.message.trim()) {
			validationErrors.message = 'Message is required';
		}
		// Set errors and stop submission if there are validation errors
		if (Object.keys(validationErrors).length > 0) {
			setValidationErrors(validationErrors);
			console.log('errors: ' + validationErrors);
			return;
		}

		// If there are no validation errors, proceed with form submission logic
		try {
			const response = await addFeedback(formData);
			if (response.isSuccess) {
				setResponseAlert({
					isError: false,
					title: `Feedback Submitted!`,
					message: 'Thank you for your feedback!',
				});
			} else {
				setResponseAlert({
					isError: true,
					title: 'Sorry! ',
					message: 'Try Refreshing and Submit again',
				});
			}
			const message = response.isSuccess
				? 'Feedback submitted successfully! Feedback ID:'
				: 'Failed to submit feedback. Please try again later.';
			console.log(message, response.feedbackId);
			// console.log("response: " + responseAlert.message);

			// Reset form fields after successful submission
			setFormData({ name: '', email: '', message: '', timestamp: new Date().toISOString() });

			// Optionally show success message to user
			// alert("Form submitted successfully!");
		} catch (error) {
			console.error('Error submitting form:', error);
			// Handle error, e.g., display an error message to the user
			alert('Failed to submit form. Please try again later.');
		}
	};

	return (
		<div className='container'>
			<div className='row justify-content-center'>
				<div className='col-md-4 mt-5 bg-light rounded'>
					<h1 className='text-center font-weight-bold text-primary'>
						Contact Us
					</h1>
					{responseAlert && responseAlert.message && (
						<Alerts
							isError={responseAlert.isError || false}
							title={responseAlert.title}
							message={responseAlert.message}
						/>
					)}
					<form onSubmit={handleSubmit} className='p-2'>
						<div className='form-group input-group'>
							<div className='input-group-prepend'>
								<span className='input-group-text'>
									<i className='fas fa-user'></i>
								</span>
							</div>
							<input
								type='text'
								name='name'
								className={`form-control ${
									validationErrors.name ? 'is-invalid' : ''
								}`}
								placeholder='Enter your name'
								value={formData.name}
								onChange={handleChange}
								required
							/>
							{validationErrors.name && (
								<div className='text-danger'>{validationErrors.name}</div>
							)}
						</div>

						<div className='form-group input-group'>
							<div className='input-group-prepend'>
								<span className='input-group-text'>
									<i className='fas fa-envelope'></i>
								</span>
							</div>
							<input
								type='email'
								name='email'
								className={`form-control ${
									validationErrors.email ? 'is-invalid' : ''
								}`}
								placeholder='Enter your email'
								value={formData.email}
								onChange={handleChange}
								required
							/>
							{validationErrors.email && (
								<div className='text-danger'>{validationErrors.email}</div>
							)}
						</div>

						<div className='form-group input-group'>
							<div className='input-group-prepend'>
								<span className='input-group-text'>
									<i className='fas fa-comment-alt'></i>
								</span>
							</div>
							<textarea
								name='message'
								id='message'
								className={`form-control ${
									validationErrors.message ? 'is-invalid' : ''
								}`}
								placeholder='Write your message'
								value={formData.message}
								onChange={handleChange}
								required
							></textarea>
							{validationErrors.message && (
								<div className='text-danger'>{validationErrors.message}</div>
							)}
						</div>

						<div className='form-group'>
							<button type='submit' className='btn btn-primary btn-block'>
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
