import React from "react";
import Sidebar from "../../../../component/Sidebar";
import Navbar from "../../../../component/Navbar";
import Footer from "../../../../component/Footer";
import "../styles/SettingsLayout.css";

function SettingsLayout({ children }) {
  return (
    <div className="settings-layout">
      <Sidebar />
      <div className="settings-main-content">
        <Navbar />
        <div className="settings-content">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default SettingsLayout;
