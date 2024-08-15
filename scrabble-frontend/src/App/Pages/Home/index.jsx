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
            <div className='footer'>
                <p>Already have a player profile? <Link className='lfooter' to="/login">LogIn!</Link></p>
            </div> 
            <div className='footer'>
                <p>Do not have a player profile? <Link className='lfooter' to="/signup">SignUp!</Link></p>
            </div> 
        </div>
    );
}

export default Home;
