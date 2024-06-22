import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../images/Roku-craft-logo.png';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{width:'100%'}}>
            <div className="container-fluid">
                {/* <img id="logo" src={logo} alt="logo" /> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className='nav-link' to="./">L</Link>
                        </li>
                        <li>
                            <Link className='nav-link' to="./contact">Contact Us </Link>
                        </li>
                        <li>
                            <Link className='nav-link' to="./blogs">Blogs</Link>

                        </li>
                        <li>
                            <Link className='nav-link' to="./login">Login</Link>
                        </li>
                        <li>
                            <Link className='nav-link' to="./admin">admin</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Header;