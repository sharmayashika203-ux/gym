import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // If not authenticated, redirect to /login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
