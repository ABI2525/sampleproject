import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import '../../../../App.css';

export default function SignInPage() {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate(); // Use useNavigate hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/addnewlog', formData);
            console.log('User logged in successfully', response.data);
            setUserData(response.data);
            navigate('/next-page'); 
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label className="label-login">Username or email address</label><br />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </p>
                <p>
                    <label className="label-login">Password</label><br />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p className='login-footer'>First time? <Link to="/register">Create an account</Link>.</p>
                <p className='login-footer'><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    );
}
