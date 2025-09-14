import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    // Simulate signup success
    alert("Signup successful!");
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #6C63FF, #FF6584)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          padding: "50px",
          borderRadius: "25px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
          textAlign: "center",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ color: "#6C63FF", marginBottom: "30px", fontSize: "2rem" }}>
          Create Account
        </h2>
        <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              padding: "12px 15px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "12px 15px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "12px 15px",
              marginBottom: "30px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "15px",
              fontSize: "1.1rem",
              fontWeight: "600",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(135deg, #6C63FF, #FF6584)",
              color: "#fff",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 15px 25px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
            }}
          >
            Signup
          </button>
        </form>
        <p style={{ marginTop: "20px", fontSize: "0.9rem", color: "#666" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#6C63FF", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
