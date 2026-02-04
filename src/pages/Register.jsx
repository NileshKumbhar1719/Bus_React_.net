import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../Services/authService";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User"); // default role
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !role) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      await register(username, email, password, role);
      setMessage("Registration successful ✅");
      alert("Registration Successful");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setMessage(
        err?.response?.data?.message || "Registration failed ❌"
      );
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />

        <label>Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <label>Password</label>
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <label>Role</label>
        <br />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <br /><br />

        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
