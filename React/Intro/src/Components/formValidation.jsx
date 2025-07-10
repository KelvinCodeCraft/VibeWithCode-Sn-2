import React from "react";
import { useState } from "react";

const FormValidation = () => {
    const [formData, setFormData] =  useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,[name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const ValidationErrors = {};
        if (!formData.username) {
            ValidationErrors.username = "Username is required";
        }
        if (!formData.email.trim()) {
            ValidationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            ValidationErrors.email = "Email is invalid";
        } else if (formData.email.length < 5) {
            ValidationErrors.email = "Email must be at least 5 characters";
        } else if (formData.email.length > 50) {
            ValidationErrors.email = "Email must be less than 50 characters";
        }
        if (!formData.password.trim()){
            ValidationErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            ValidationErrors.password = "Password must be at least 8 characters";
        } 
        if (!formData.confirmPassword.trim()) {
            ValidationErrors.confirmPassword = "Confirm Password is required";
        }
        else if (formData.confirmPassword !== formData.password) {
            ValidationErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(ValidationErrors);

        if (Object.keys(ValidationErrors).length === 0) {
            console.log("Form submitted successfully", formData);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input 
                    type="text" 
                    name="username"
                    placeholder="Username"
                    autoComplete="off"
                    onChange={handleChange}
                />
                {errors.username && <span >{errors.username}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email"
                    placeholder="example@gmail.com"
                    autoComplete="off"
                    onChange={handleChange}
                />
                {errors.email && <span >{errors.email}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    name="password"
                    placeholder="*********"
                    autoComplete="off"
                    onChange={handleChange}
                />
                {errors.password && <span >{errors.password}</span>}
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password" 
                    name="confirmPassword"
                    placeholder="*********"
                    autoComplete="off"
                    onChange={handleChange} 
                />
                {errors.confirmPassword && <span >{errors.confirmPassword}</span>}
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default FormValidation;