import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Save user in localStorage
    const userData = { email, password };
    localStorage.setItem("careerpath_user", JSON.stringify(userData));

    alert("Signup successful! You can now login.");
    navigate("/login");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign Up</h2>

        <form onSubmit={handleSignup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}
