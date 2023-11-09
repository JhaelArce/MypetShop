import React, { useState } from "react";
import uniqid from 'uniqid';
import axios from 'axios';
import '../Css/AddUser.css';

function AddUser() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    function signUpUser() {
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            username: username,
            userId: uniqid()
        };

        console.log(user);

        // Aquí puedes enviar los datos del usuario al servidor o realizar las acciones necesarias.
        axios.post('/api/user/adduser', user)
            .then(res => {
                alert(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className={`container white-container`}>

            <div className="row ">
                <h2 className="mt-4">Sign Up</h2>
            </div>

            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="gray-background p-3">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>

                        <div className="button-container">
                            <button onClick={signUpUser} className="btn btn-success">Sign Up</button>
                        </div>

                        <div className="button-container">
                            <button className="btn-google">
                                <img src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg" alt="Google Logo" />
                              Google
                            </button>
                        </div>

                        <div className="button-container">
    <button className="btn-facebook-alternate">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook Logo" />
        Facebook
    </button>
</div>
                    </div>
                </div>
            </div>
            
        </div>

        
    );
}

export default AddUser;