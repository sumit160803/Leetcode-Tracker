// src/components/Login.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useInputValidation } from '6pp';
import { usernameValidator, emailValidator } from '../../utils/validator';
import Homepage from '../homepage/Homepage.jsx';
import  './Login.css';


const Login = () => {
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const username = useInputValidation('', usernameValidator);
  const email = useInputValidation('', emailValidator);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.value || !username.value) {
      setError('Please fill out both fields');
      return;
    }

    console.log('Logging in with', { email: email.value, username: username.value });
    setError('');
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Homepage />;
  }

  return (
    <div
      className="login-container d-flex justify-content-center align-items-center vh-100"
      style={{
        // backgroundColor: 'rgba(255, 255, 255, 0.1)',
        // backdropFilter: 'blur(10px)',
        height: '100vh',
      }}
    >
      <div
        style={{
          backgroundColor: 'transparent',
          border: '1px solid rgba(0, 0, 50, 0.7)',
          backdropFilter: 'blur(40px)',
          boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.4)',
          borderRadius: '10px',
          padding: '20px',
          width: '300px',
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2 style={{ textAlign: 'center', color: 'rgba(0, 0, 50, 0.7)', marginBottom: '20px' }}>Login</h2>

          {error && (
            <p style={{ color: 'red', textAlign: 'center', marginBottom: '15px' }}>
              {error}
            </p>
          )}

          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label" style={{ color: '#000' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email.value}
              onChange={email.changeHandler}
              className="form-control"
              style={{
                borderRadius: '30px',
                padding: '10px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="username" className="form-label" style={{ color: '#000' }}>
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your Leetcode Username"
              value={username.value}
              onChange={username.changeHandler}
              className="form-control"
              style={{
                borderRadius: '30px',
                padding: '10px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              borderRadius: '20px',
              padding: '10px',
              marginTop: '20px',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseOver={(e) => {
              e.target.classList.add('bg-hover-gradient');
            }}
            onMouseOut={(e) => {
              e.target.classList.remove('bg-hover-gradient');
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
