import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/subFooter';
import Header from '../headers/subHeader';
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className='form-container'>
      <Header />
      <div className='inner-container'>
        <div className='mention'>
          <p className='prob'>sign in</p>
          <p className='welcome'>welcome back!</p>
        </div>
        <form className='login-form'>
          <label for='email'>Email/Username</label>
          <input className='log-input' type='text' placeholder='Email' />
          <label for='password'>Password</label>
          <input className='log-input' type='password' placeholder='Password' />
          <button className='log-btn' type='submit'>
            log in
          </button>
          <p className='forgt-pass'>
            <Link>forgort password?</Link>
          </p>
          <div className='social-media'>
            <p> -Or signin with: </p>
            <div className='social-log'>
              <ul>
                <li>
                  <AiFillFacebook size={20} />
                </li>
                <li>
                  <AiFillTwitterSquare size={20} />
                </li>
                <li>
                  <FcGoogle size={20} />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
