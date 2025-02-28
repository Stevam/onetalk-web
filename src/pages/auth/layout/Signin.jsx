import React, { useState } from "react";
import { signin } from '../../../services/auth/authService';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { PuffLoader } from 'react-spinners';
import Popup from '../../../component/Popup';
import "../styles/Signin.css";

function Signin({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const emailId = `email-${Math.random().toString(36).substr(2, 9)}`;
  const passwordId = `password-${Math.random().toString(36).substr(2, 9)}`;
  const togglePassSignin = `toggle-pass-signin-${Math.random().toString(36).substr(2, 9)}`;
  const signinBtnId = `signin-btn-${Math.random().toString(36).substr(2, 9)}`;

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signin(email, password);
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Signin failed: ' + err.message);
      setShowPopup(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSignin}>
          <label htmlFor={emailId}>Email:</label>
          <input id={emailId} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" />
          <label htmlFor={passwordId}>Password:</label>
          <div className="password-input">
            <input id={passwordId} type={showPassword ? "text" : "password"}
              value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password" />
            <button id={togglePassSignin} type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button id={signinBtnId} type="submit" disabled={loading}>
            {loading ? <PuffLoader size={20} color={"#fff"} /> : 'Sign In'}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <div className="signin-links">
          <span>Don't you have an account? </span>
          <a href="#" onClick={onSwitch}>Click here</a>
        </div>
        <div className="signin-links">
          <span>Forgot password? </span>
          <a href="#">Click here</a>
        </div>
      </div>
      {/* {showPopup && (
        <Popup
          message={error}
          duration={20000} // 5 segundos
          onClose={() => setShowPopup(false)} // Fecha a popup
        />
      )} */}
    </div>
  );
}

export default Signin;