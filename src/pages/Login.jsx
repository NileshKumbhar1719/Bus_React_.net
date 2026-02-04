import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Services/authService";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");   // ✅ consistent naming
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Please enter username and password");
      return;
    }

    try {
      const response = await login(username, password);

      // ✅ backend may or may not return token
      const token = response?.data?.token;
      if (token) {
        localStorage.setItem("token", token);
      }

      setMessage(response?.data?.message || "Login successful ✅");
      alert("Login Successful");
      navigate("/"); // redirect to home
    } catch (err) {
      console.error(err);
      setMessage(
        err?.response?.data?.message ||
        "Invalid username or password ❌"
      );
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      {message && (
        <p className={`message ${message.includes("successful") ? "success" : "error"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
