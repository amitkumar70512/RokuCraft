import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Feedback } from '../../firebase/interface';
import { addFeedback } from '../../firebase/feedback';
import Alerts from '../Common/Alerts';
import { startLoading, stopLoading } from '../../redux/actions/loadingActions';

const Contact: React.FC = () => {
    const dispatch = useDispatch<any>();

    const initialFormData: Feedback = {
        name: '',
        email: '',
        message: '',
        timestamp: new Date().toISOString(),
    };

    const [formData, setFormData] = useState<Feedback>(initialFormData);
    const [validationErrors, setValidationErrors] = useState<Partial<Feedback>>({});
    const [responseAlert, setResponseAlert] = useState<{ isError: boolean; title: string; message: string }>({
        isError: false,
        title: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        const errors: Partial<Feedback> = {};
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        } else if (!/^[A-Za-z ]+$/.test(formData.name)) {
            errors.name = 'Name is invalid';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }
        // Set errors and stop submission if there are validation errors
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        // If there are no validation errors, proceed with form submission logic
        try {
            dispatch(startLoading());
            const response = await addFeedback(formData);
            if (response.isSuccess) {
                setResponseAlert({
                    isError: false,
                    title: 'Feedback Submitted!',
                    message: 'Thank you for your feedback!',
                });
            } else {
                setResponseAlert({
                    isError: true,
                    title: 'Sorry!',
                    message: 'Failed to submit feedback. Please try again later.',
                });
            }
            // Reset form fields after successful submission
            setFormData(initialFormData);
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error, e.g., display an error message to the user
            alert('Failed to submit form. Please try again later.');
        } finally {
            dispatch(stopLoading()); // Ensure loading state is stopped regardless of success or failure
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Contact Us</h2>
                            {responseAlert.message && (
                                <Alerts
                                    isError={responseAlert.isError}
                                    title={responseAlert.title}
                                    message={responseAlert.message}
                                />
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`}
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    {validationErrors.name && (
                                        <div className="invalid-feedback">{validationErrors.name}</div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`}
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {validationErrors.email && (
                                        <div className="invalid-feedback">{validationErrors.email}</div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className={`form-control ${validationErrors.message ? 'is-invalid' : ''}`}
                                        placeholder="Write your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    {validationErrors.message && (
                                        <div className="invalid-feedback">{validationErrors.message}</div>
                                    )}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
