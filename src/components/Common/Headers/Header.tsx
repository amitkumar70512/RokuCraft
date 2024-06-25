import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyProfileSubSection from '../../Users/MyProfileSubSection/MyProfileSubSection';
import './Header.css'; // Import your CSS file for header-specific styles

function Header() {
    const [showProfile, setShowProfile] = useState(false);

    const handleProfileHover = () => {
        setShowProfile(true);
    };
    const hideProfile = () => {
        setShowProfile(false);
    };

    const handleProfileLeave = () => {
        setTimeout(() => {
            if(!showProfile)
                setShowProfile(false);
        }, 500);
    };
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Logo {/* Replace with your logo if needed */}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                    </ul>
                </div>

                <div className="myProfile" onMouseEnter={handleProfileHover} onMouseLeave={handleProfileLeave}>
                    <i className="fa fa-user-circle profile-icon"></i>
                </div>

                {showProfile && <MyProfileSubSection  hideProfile={hideProfile} />}
            </div>
        </nav>
    );
}

export default Header;
