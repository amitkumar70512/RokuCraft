import React, { useState, useEffect } from 'react';
import './GoToTopButton.css'; // Import your CSS file for styling (create this file if it doesn't exist)

const GoToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Show button when user scrolls down 400px
    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="go-to-top">
            {isVisible &&
                <button className="btn btn-primary" onClick={scrollToTop}>
                    <i className="fas fa-arrow-up"></i> Go to Top
                </button>
            }
        </div>
    );
};

export default GoToTopButton;
