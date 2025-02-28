import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { HashLoader } from "react-spinners";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [delayedAuth, setDelayedAuth] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedAuth(isAuthenticated);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isAuthenticated]);

  if (delayedAuth === null) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
        <HashLoader size={50} color={"var(--text-color)"} />
        <p style={{ marginLeft: "10px", color: "var(--text-color)" }}>Loading...</p>
      </div>
    );
  }

  if (!delayedAuth) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;
