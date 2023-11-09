import React, { useState } from "react";
import axios from 'axios';
import '../Css/AddUser.css';
import Header from './Header.js'; // Importa el componente Header
import Footer from "./Footer.js";

function AddUser() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signUpUser(e) {
        e.preventDefault();
        const user = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password,
        };

        console.log(user);

        axios.post('/api/user/adduser', user)
            .then(res => {
                alert(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <Header />

        <form className="form" onSubmit={signUpUser}>
            <p className="title">Register</p>
            <p className="message">Register now and get full access to other features</p>
            <div className="form-fields">
                <div className="form-field">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        required
                        type="text"
                        id="firstName"
                        className="input"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        required
                        type="text"
                        id="lastName"
                        className="input"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="username">Username</label>
                    <input
                        required
                        type="text"
                        id="username"
                        className="input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        required
                        type="email"
                        id="email"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input
                        required
                        type="password"
                        id="password"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        required
                        type="password"
                        id="confirmPassword"
                        className="input"
                    />
                </div>
            </div>
            <button className="submit" type="submit">Sign Up</button>
            <p className="signin">Register with</p>

            <div className="social-buttons-container">
                <button className="social-button google-button">
                    <img src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg" alt="Google" />
                    Google
                </button>
                <button className="social-button facebook-button">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" />
                    Facebook
                </button>
            </div>
            <p className="signin">Already have an account? <a href="#">Sign In</a></p>
        </form>
        <Footer />
        </div>
    );
}

export default AddUser;

