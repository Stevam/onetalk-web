import React from "react";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>OneTalk. ©{new Date().getFullYear()} Created by Stevam Reis.</p>
    </footer>
  );
}

export default Footer;