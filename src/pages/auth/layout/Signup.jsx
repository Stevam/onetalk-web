import React, { useState } from "react";
import { signup } from '../../../services/auth/authService';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "../styles/Signup.css";

function Signup({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const emailId = `email-${Math.random().toString(36).substr(2, 9)}`;
  const nameId = `nameId-${Math.random().toString(36).substr(2, 9)}`;
  const passwordId = `password-${Math.random().toString(36).substr(2, 9)}`;
  const togglePassSignup = `toggle-pass-Signupignup-${Math.random().toString(36).substr(2, 9)}`;
  const signupBtnId = `signup-btn-${Math.random().toString(36).substr(2, 9)}`;
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(name, email, password);
      window.location.href = '/sign-in';
    } catch (err) {
      setError('Signup failed: ' + err.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <label htmlFor={nameId}>Name:</label>
          <input id={nameId} type="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter your name" />
          <label htmlFor={emailId}>Email:</label>
          <input id={emailId} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" />
          <label htmlFor={passwordId}>Password:</label>
          <div className="password-input">
            <input id={passwordId} type={showPassword ? "text" : "password"}
              value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password" />
            <button id={togglePassSignup} type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button id={signupBtnId} type="submit">Sign Up</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <div className="signup-links">
          <span>Already have an account? </span>
          <a href="#" onClick={onSwitch}>Click here</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
