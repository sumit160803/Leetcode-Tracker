// src/components/Login.js
import React, { useState, useEffect } from 'react';
import './Login.css'; // Styles for the component
import {useInputValidation} from '6pp';
import {usernameValidator,emailValidator} from '../../utils/validator';
import Homepage from "../homepage/Homepage.jsx"

const Login = () => { 
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const username = useInputValidation("",usernameValidator);
  const email = useInputValidation("",emailValidator);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (just checking for empty fields)
    if (!email.value || !username.value) {
      setError('Please fill out both fields');
      return;
    }

    // You can add your actual authentication logic here 
    console.log('Logging in with', { email: email.value, username: username.value});
    setError('');  // Reset the error after successful login attempt
    setIsLoggedIn(true); //set logged in state
  };

  // If the user is logged in, render the Homepage component
  if (isLoggedIn) {
    return <Homepage/>;
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {error && <p className="error-message">{error}</p>} {/* Display error if any */}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email.value}
            onChange={email.changeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            placeholder="Enter your Leetcode Username"
            value={username.value}
            onChange={username.changeHandler}
          />
        </div>

        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
