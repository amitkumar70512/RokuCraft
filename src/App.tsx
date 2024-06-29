// app.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Common/Headers/Header';
import Blogs from './components/Blogs/Blogs';
import Admin from './components/Users/Admin/Admin';
import Footer from './components/Common/Footer/Footer';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import GoToTopButton from './components/Common/GoToTopButton/GoToTopButton';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import IndividualBlog from './components/Blogs/IndividualBlog'; // Adjust path as needed
import BotProfile from './components/Users/MyProfile/MyProfile';
import LoadingSpinner from './components/Common/LoadingSpinner/LoadingSpinner';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store/store';
import AdminRoute from './components/PrivateRoute/AdminRoute';

const App: React.FC = () => {
    const isLoggedIn = false;
    const isLoading = useSelector((state: RootState) => state.loading.isLoading); // Fetch isLoading from Redux store
    return (
        <Router>
            <div className="justify-content-center">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blog/show/:blogId" element={<IndividualBlog />} />
                    <Route path="/admin" element={<AdminRoute ><Admin /></AdminRoute>} />
                    <Route path="/profile/:userName" element={<BotProfile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Home />} />
                    {/* Add more routes as needed */}
                </Routes>
                <Footer />
                <GoToTopButton />
                {isLoading && <LoadingSpinner />} {/* Conditionally render LoadingSpinner based on isLoading */}
            </div>
        </Router>
    );
};

export default App;