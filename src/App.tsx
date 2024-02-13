// app.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstComponent from "./components/FirstComponent";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import Admin from "./components/Admin/Admin";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
    return (
        <Router>
            <div className="container-lg">
                <Header />
                <Routes>
                    <Route path="/" element={<FirstComponent />} />
                    <Route path="/home" element={<FirstComponent />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="*" element={<FirstComponent />} />
                    {/* Add more routes as needed */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
