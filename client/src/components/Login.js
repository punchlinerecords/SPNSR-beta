import React, { useState } from "react";
import API_BASE_URL from "../config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      setMessage("Login successful!");
      window.location.href = "/dashboard";
    } else {
      setMessage("Login failed. Try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => 
setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => 
setPassword(e.target.value)} required />
        <button type="submit">Login</button>
	<button onClick={() => window.location.href = "/signup"}>Sign Up</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Login;

