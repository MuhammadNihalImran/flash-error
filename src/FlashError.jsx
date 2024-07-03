// src/FlashError.js
import React from "react";
import "./FlashError.css"; // We'll add styles here later

const FlashError = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="flash-error">
      <span>{message}</span>
      <button onClick={onClose} className="close-button">
        X
      </button>
    </div>
  );
};

export default FlashError;
