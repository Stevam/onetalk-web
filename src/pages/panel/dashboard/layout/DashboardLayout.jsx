import React from "react";
import Sidebar from "../../../../component/Sidebar";
import Navbar from "../../../../component/Navbar";
import Footer from "../../../../component/Footer";
import "../styles/DashboardLayout.css";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main-content">
        <Navbar />
        <div className="dashboard-content">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;
