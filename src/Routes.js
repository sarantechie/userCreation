import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Login } from "./components/Login";
import { Register } from "./components/Register";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("authToken");
    console.log("token",token);
    
    if (!token) {
        return <Navigate to="/login" />
    } else {
        return children;
    }
}
export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}