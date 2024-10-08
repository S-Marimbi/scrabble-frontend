import React, { useState } from 'react';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Error from '../../Components/Error';

function Signup() {
    const [user_name, setUser_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { user_name, email, password });
        
        axios({
            method: "POST",
            url: "http://127.0.0.1:9000/signup", 
            data: {
              user_name: user_name,
              email: email,
              password: password,
            },
          })
            .then((res) => {
              setErrorMessage(null);
              navigate("/LogIn");
            })
            .catch((e) => {
              setErrorMessage(e?.response?.data?.message || "Error: Try Again");
            });
    };

    return (
        <div className="signup-class">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-class">
                    <label htmlFor="user_name">User_name:</label>
                    <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        value={user_name}
                        onChange={(e) => setUser_name(e.target.value)}
                        required
                        placeholder='Enter user name here'
                    />
                </div>
                <div className="form-class">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Enter email here'
                    />
                </div>
                <div className="form-class">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='Enter your password here'
                    />
                </div>
                <button type="submit" className="submit-button">Register</button>
            </form>
            <div>
                <Error errorMessage={errorMessage} />
            </div>
            <div className='footer'>
                <p>Have a player profile? <Link className='lfooter' to="/login">LogIn!</Link></p>
            </div>
        </div>
    );
}

export default Signup;
