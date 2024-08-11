import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <h1>Welcome To Wabble</h1>
            <div className='hinput'>
                <Link to="/signup">
                     <button className='hbutton'>Sign Up Here</button>
                </Link>
            </div>
            <div className='hinput'>
                <Link to="/login">
                     <button className='hbutton'>Login Here</button>
                </Link>
            </div>
            <div style={{ marginTop: '20px' }}>
                <p>Already have a player profile? <Link to="/login">LogIn!</Link></p>
            </div> 
            <div style={{ marginTop: '20px' }}>
                <p>Do not have a player profile? <Link to="/signup">SignUp!</Link></p>
            </div> 
        </div>
    );
}

export default Home;
