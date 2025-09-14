import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #6C63FF, #FF6584)",
        color: "#fff",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        padding: "0 20px",
      }}
    >
      {/* Header */}
      <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "10px" }}>
        Welcome to Nirvaya
      </h1>
      <p style={{ fontSize: "1.5rem", fontWeight: "300", marginBottom: "40px" }}>
        Wellness that grows with you
      </p>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "15px 40px",
            fontSize: "1.2rem",
            fontWeight: "600",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
            background: "#fff",
            color: "#6C63FF",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
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
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          style={{
            padding: "15px 40px",
            fontSize: "1.2rem",
            fontWeight: "600",
            borderRadius: "50px",
            border: "2px solid #fff",
            cursor: "pointer",
            background: "transparent",
            color: "#fff",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#fff";
            e.target.style.color = "#6C63FF";
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 15px 25px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#fff";
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
          }}
        >
          Signup
        </button>
      </div>

      {/* Footer Illustration or Graphic Placeholder */}
      <div
        style={{
          marginTop: "60px",
          width: "80%",
          maxWidth: "600px",
          height: "300px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.2rem",
          fontWeight: "300",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        {/* You can replace this with an SVG or image */}
        Mental Health & Wellness Illustration Here
      </div>
    </div>
  );
}

export default Landing;
