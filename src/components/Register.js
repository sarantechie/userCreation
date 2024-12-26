import React, { useState } from "react";
import { registerUser } from "../services/api";

export const Register = () => {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: ""
    });


    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data", formData);
        try {
            const response = await registerUser(formData);
            setMessage(response.data.message);
        } catch (err) {
            console.log("errro", err);
            setMessage(err?.response?.data?.message || "Registration Failed");
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="userName"
                    placeholder="Username"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )

}

