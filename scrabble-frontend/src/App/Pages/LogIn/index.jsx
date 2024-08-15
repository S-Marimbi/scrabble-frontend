import React, { useState, useContext } from 'react';
import axios from "axios";
import Error from '../../Components/Error';
import APPCONTEXT from "../../Context/AppContext.jsx"
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const { setUser, setToken } = useContext(APPCONTEXT);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { email, password });

        axios({
            method: "POST",
            url: "http://127.0.0.1:9000/login", 
            data: {
              email: email,
              password: password,
            },
          })
            .then((res) => {
              const data = res?.data;
              setToken(data?.token || null);
              setUser(data?.user || null);
              setErrorMessage(null);
              navigate("/game");
            })
            .catch((e) => {
              setErrorMessage(e?.response?.data?.message || "Error: Try Again");
            });
        
    };

    return (
        <div className="login-class">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-class">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Enter email address'
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
                        placeholder='Enter your password'
                    />
                </div>
                <button type="submit" className="submit-button">Login</button>
            </form>
            <div>
                <Error errorMessage={errorMessage} />
            </div>
            <div className='footer'>
                <p>Do not have a player profile? <Link className='lfooter' to="/signup">SignUp!</Link></p>
            </div>
        </div>
    );
}

export default Login;
