import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MoodTracker() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    energy: "",
    sleep: "",
    stress: "",
    motivation: "",
  });
  const [currentMood, setCurrentMood] = useState("");

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const calculateMood = () => {
    const scoreMap = { Low: 1, Medium: 2, High: 3, Poor: 1, Average: 2, Good: 3 };
    let totalScore = 0;
    let count = 0;

    for (let key in answers) {
      const value = answers[key];
      if (value) {
        totalScore += scoreMap[value] || 0;
        count++;
      }
    }

    if (count === 0) return "No data";

    const avgScore = totalScore / count;
    if (avgScore >= 2.5) return "Happy 😄";
    if (avgScore >= 1.5) return "Neutral 😐";
    return "Sad 😢";
  };

  const handleSubmit = () => {
    const mood = calculateMood();
    setCurrentMood(mood);
    console.log("Mood answers:", answers);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        background: "linear-gradient(135deg, #6C63FF, #FF6584)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.15)",
          padding: "40px",
          borderRadius: "25px",
          width: "100%",
          maxWidth: "500px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
          backdropFilter: "blur(10px)",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "10px" }}>
          🌤️ Mood Tracker
        </h1>
        <p style={{ fontSize: "1rem", marginBottom: "30px" }}>
          Answer a few quick questions to see how you’re feeling today.
        </p>

        {/* Form Questions */}
        {[
          { label: "Energy Level:", name: "energy", options: ["Low", "Medium", "High"] },
          { label: "Sleep Quality:", name: "sleep", options: ["Poor", "Average", "Good"] },
          { label: "Stress Level:", name: "stress", options: ["Low", "Medium", "High"] },
          { label: "Motivation Level:", name: "motivation", options: ["Low", "Medium", "High"] },
        ].map((q) => (
          <div key={q.name} style={{ marginBottom: "20px", textAlign: "left" }}>
            <label style={{ display: "block", fontWeight: "600", marginBottom: "8px" }}>
              {q.label}
            </label>
            <select
              name={q.name}
              value={answers[q.name]}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "none",
                fontSize: "1rem",
                outline: "none",
                background: "rgba(255,255,255,0.25)",
                color: "#fff",
              }}
            >
              <option value="">--Select--</option>
              {q.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}

        {/* Buttons */}
        <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
          <button
            onClick={handleSubmit}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "50px",
              border: "none",
              background: "#fff",
              color: "#6C63FF",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 12px 25px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
            }}
          >
            Submit
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "50px",
              border: "none",
              background: "rgba(255,255,255,0.3)",
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 12px 25px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
            }}
          >
            Back to Dashboard
          </button>
        </div>

        {/* Result */}
        {currentMood && (
          <div
            style={{
              marginTop: "30px",
              background: "rgba(255,255,255,0.25)",
              padding: "20px",
              borderRadius: "20px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
            }}
          >
            <h2 style={{ marginBottom: "10px" }}>Your Current Mood:</h2>
            <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>{currentMood}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MoodTracker;
