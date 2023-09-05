import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../../../App.css';

export default function SignUpPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Send a POST request to your backend API to store the registration data
            await axios.post('http://localhost:8080/addnewreg', formData);

            // Redirect to the next page (e.g., '/home') upon successful registration
            navigate('/realhome');
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form onSubmit={handleSubmit} className="text-center">
                <p>
                    <label>Username</label><br/>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </p>
                <p>
                    <input
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                        required
                    />{' '}
                    <span>
                        I agree all statements in{' '}
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                            terms of service
                        </a>
                        .
                    </span>
                </p>
                <p>
                    <button id="sub_btn" type="submit">
                        Register
                    </button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    );
}
