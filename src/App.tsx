// app.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Headers/Header';
import Blogs from './components/Blogs/Blogs';
import Admin from './components/Admin/Admin';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import GoToTopButton from './components/GoToTopButton/GoToTopButton';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import IndividualBlog from './components/Blogs/IndividualBlog'; // Adjust path as needed

const App: React.FC = () => {
    const isLoggedIn = false;

  return (
        <Router>
            <div className="justify-content-center">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blog/show/:blogId" element={<IndividualBlog/>} />
                    <Route path="/admin" element={<PrivateRoute isLoggedIn={isLoggedIn}><Admin /></PrivateRoute>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Home />} />
                    {/* Add more routes as needed */}
                </Routes>
                <Footer />
                <GoToTopButton />
            </div>
        </Router>
    );
};

export default App;