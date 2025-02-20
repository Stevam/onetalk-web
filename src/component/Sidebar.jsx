import React, { useState } from "react";
import { FaUserFriends, FaHome, FaSignOutAlt } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { logout } from "../services/auth/authService";
import "./styles/Sidebar.css";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <img src="/icon.svg" alt="Logo" className="sidebar-logo" />
                <ul>
                    <li><Link to="/dashboard"><FaHome /> Dashboard</Link></li>
                    <li><Link to="/message"><LuMessagesSquare  /> Messages</Link></li>
                    <li><Link to="/friends"><FaUserFriends /> Friends</Link></li>
                    <li><Link to="/settings"><IoSettingsSharp /> Settings</Link></li>
                    <li onClick={logout} className="logout"><FaSignOutAlt /> Logout</li>
                </ul>
            </aside>
        </>
    );
}

export default Sidebar;