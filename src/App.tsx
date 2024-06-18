// app.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Headers/Header";
import Blogs from "./components/Blogs/Blogs";
import Admin from "./components/Admin/Admin";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import GoToTopButton from "./components/GoToTopButton/GoToTopButton";
import Login from "./components/Login/Login";

const App: React.FC = () => {
    return (
        <Router>
            <div className="justify-content-center">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Home />} />
                    {/* Add more routes as needed */}
                </Routes> 
                <Footer />
                <GoToTopButton/>
            </div>
        </Router>
    );
};

export default App;
