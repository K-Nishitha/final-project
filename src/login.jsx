import { useState } from "react";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("careerpath_user"));

    if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
      alert("Invalid credentials!");
      return;
    }

    // 👉 Save active session
    localStorage.setItem("careerpath_loggedin", JSON.stringify(savedUser));

    alert(`Logged in with email: ${email}`);

    // 👉 Redirect to home page
    window.location.href = "/";
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
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

          <button type="submit">Login</button>

          <p style={{ marginTop: "10px" }}>
            Don't have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => (window.location.href = "/signup")}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
