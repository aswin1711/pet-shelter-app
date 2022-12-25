import React from 'react';
import './registerShelter.css';
import {Link} from 'react-router-dom';

export default function RegisterShelter(props) {
  return (
    <div className='register'>
      <div className="btn-container">
        <div className='log-in'>
          <h3>Do you already have an account?</h3>
          <div className='btm-btn-wrapper'>
            <Link to='/shelters/login'><button>Log In</button></Link>
          </div>
        </div>
        <div className='sign-up'>
          <h3>Ready to register your shelter?</h3>
          <div className='btm-btn-wrapper'>
            <Link to='/shelters/signup'><button>Sign Up</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}