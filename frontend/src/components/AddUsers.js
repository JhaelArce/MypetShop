import React, { useState } from "react";
import uniqid from 'uniqid';
import axios from 'axios';

function AddUser() {
    // Hooks
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function addUser() {
        const user = {
            name: name,
            email: email,
            phone: phone,
            userId: uniqid()
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
        <div className="container">
            <div className="row">
                <h2 className="mt-4">
                    Create a New User
                </h2>
            </div>

            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" className="form-control" value={phone} onChange={(e) => { setPhone(e.target.value) }}></input>
                    </div>

                    <button onClick={addUser} className="btn btn-success">Save User</button>
                </div>
            </div>
        </div>
    );
}

export default AddUser;
