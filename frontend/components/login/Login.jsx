// src/components/Login.js
import React, { useState } from 'react';
import '../../assets/Login.css'; // Styles for the component
import {useInputValidation} from '6pp';
import {usernameValidator,emailValidator} from '../../utils/validator';

const Login = () => {
  const [error, setError] = useState('');

  const username = useInputValidation("",usernameValidator);
  const email = useInputValidation("",emailValidator);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (just checking for empty fields)
    if (!email || !username) {
      setError('Please fill out both fields');
      return;
    }

    // You can add your actual authentication logic here
    console.log('Logging in with', { email, username});
    setError('');  // Reset the error after successful login attempt
  };

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
