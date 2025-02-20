import React, { useState } from 'react';
import Signin from "./layout/Signin";
import Signup from "./layout/Signup";
import ThemeToggle from "../../component/ThemeToggle"
import './styles/Auth.css';

function Auth() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="auth-container">
      {/* cteate component layout sing in */}
      {/* cteate component layout sing up */}
      {/* cteate component layout forgot your password */}
      {isSignup ? (
        <Signup onSwitch={() => setIsSignup(false)} />
      ) : (
        <Signin onSwitch={() => setIsSignup(true)} />
      )}
    </div>
  );
}

export default Auth;
