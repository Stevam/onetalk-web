import React from "react";
import Sidebar from "../../../../component/Sidebar";
import Navbar from "../../../../component/Navbar";
import Footer from "../../../../component/Footer";
import "../styles/ProfileLayout.css";

function ProfileLayout({ children }) {
  return (
    <div className="profile-layout">
      <Sidebar />
      <div className="profile-main-content">
        <Navbar />
        <div className="profile-content">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default ProfileLayout;
