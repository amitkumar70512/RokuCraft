// app.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstComponent from "./components/FirstComponent";

const App: React.FC = () => {
    return (
        <div>
            <h1>Hello, Welcome to React and TypeScript</h1>
            <Router>
                <Routes>
                    <Route path="/" element={<FirstComponent />} />
                    {/* Add more routes as needed */}
                </Routes>
            </Router>
        </div>
    );
};

export default App;
