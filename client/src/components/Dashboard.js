import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        minHeight: "100vh",
        padding: "30px",
        background: "linear-gradient(135deg, #6C63FF, #FF6584)",
        color: "#fff",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700" }}>Wellness Dashboard</h1>
        <button
          onClick={handleLogout}
          style={{
            background: "#fff",
            color: "#6C63FF",
            border: "none",
            padding: "12px 20px",
            borderRadius: "50px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
          }}
        >
          Logout
        </button>
      </header>

      {/* Welcome Section */}
      <section
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "40px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>Welcome Back!</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
          Take charge of your mental health. Choose a tool below to track your progress
          and seek help when needed.
        </p>
      </section>

      {/* Dashboard Buttons */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "25px",
        }}
      >
        {[
          { label: "🌤️ Mood Tracker", path: "/mood-tracker" },
          { label: "😴 Sleep Tracker", path: "/sleep-tracker" },
          { label: "📝 AI Journal", path: "/ai-journal" },
          { label: "🚨 Emergency Help", path: "/emergency-help" },
          { label: "👩‍⚕️ Therapist Connect", path: "/therapist-connect" },
        ].map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              padding: "25px",
              borderRadius: "20px",
              background: "rgba(255, 255, 255, 0.2)",
              border: "none",
              color: "#fff",
              fontSize: "1.2rem",
              fontWeight: "600",
              cursor: "pointer",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.35)";
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.2)";
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
