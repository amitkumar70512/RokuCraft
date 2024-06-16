import React, { useState } from 'react';
import { Feedback } from '../../firebase/interface';
import { getAllFeedbacks, getFilteredFeedbacks, addFeedback } from '../../firebase/feedback';


const Contact: React.FC = () => {
    const [formData, setFormData] = useState<Feedback>({
        name: '',
        email: '',
        message: '',
        timestamp: new Date(),
    });

    const [errors, setErrors] = useState<Partial<Feedback>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Clear validation error if user starts typing again
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: undefined
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Perform validation
        const validationErrors: Partial<Feedback> = {};
        if (!formData.name.trim()) {
            validationErrors.name = 'Name is required';
        }else if(!/^[A-Za-z]+$/.test(formData.name)){
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
            setErrors(validationErrors);
            console.log("errors: "+ validationErrors)
            return;
        }

        // If there are no validation errors, proceed with form submission logic
        try {
           
            const response = await addFeedback(formData)
            console.log('Form submission successful:');

            // Reset form fields after successful submission
            setFormData({ name: '', email: '' , message: '' ,timestamp: new Date()});

            // Optionally show success message to user
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error, e.g., display an error message to the user
            alert('Failed to submit form. Please try again later.');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 mt-5 bg-light rounded">
                    <h1 className="text-center font-weight-bold text-primary">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="p-2">
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                            </div>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-comment-alt"></i></span>
                            </div>
                            <textarea
                                name="message"
                                id="message"
                                className="form-control"
                                placeholder="Write your message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        {errors.message && <small className="text-danger">{errors.message}</small>}
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
