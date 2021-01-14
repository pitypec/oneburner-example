import React from 'react';
import Footer from '../footer/subFooter';
import Header from '../headers/subHeader';

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
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
