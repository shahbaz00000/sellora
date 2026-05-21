import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

const Error = ({ message }) => {
  const navigate = useNavigate();

  // Don't render if there's no error message
  if (!message) {
    return null;
  }

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="error-container">
      <div className="error-box">
        <div className="error-illustration">⚠️</div>
        <div className="error-icon">😕</div>
        <h1 className="error-title">Oops!</h1>
        <p className="error-subtitle">Something went wrong</p>
        {message && <div className="error-message">{message}</div>}
        <div className="error-actions">
          <button
            className="error-btn error-btn-primary"
            onClick={handleGoHome}
          >
            🏠 Go to Home
          </button>
          <button
            className="error-btn error-btn-secondary"
            onClick={handleGoBack}
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
