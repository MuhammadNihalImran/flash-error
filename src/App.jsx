// src/App.js
import React, { useState } from "react";
import FlashError from "./FlashError";
import "./App.css"; // Add some basic styles if needed

function App() {
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setError("Name cannot be empty");
    } else {
      setError("");
      alert("Form submitted successfully");
    }
  };

  return (
    <div className="App">
      <h1>Flash Error Example</h1>
      <FlashError message={error} onClose={() => setError("")} />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
