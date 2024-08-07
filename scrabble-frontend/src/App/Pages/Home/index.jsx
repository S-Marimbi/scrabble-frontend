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
            <div>
              Already have a player profile? Use Login
            </div>       
        </div>
    );
}

export default Home;