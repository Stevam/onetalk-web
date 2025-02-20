import React, { useState } from "react";
import { FaUser , FaSignOutAlt } from "react-icons/fa";
import { logout } from "../services/auth/authService";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <h1>OneTalk</h1>
            
            <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ☰
            </button>
            <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
                <Link to="/profile "><FaUser /> </Link>
                <a onClick={logout} className="logout"><FaSignOutAlt/> </a>
            </div>
        </nav>
    );
}

export default Navbar;