import React from "react";

const EmergencyHelp = () => {
  const indiaHelplines = [
    {
      name: "National Mental Health Helpline (KIRAN)",
      contact: "1800-599-0019",
      desc: "(24x7, toll-free)",
    },
    {
      name: "AASRA Suicide Prevention Helpline",
      contact: "+91-98204-66726",
      desc: "(24x7)",
    },
    {
      name: "Snehi Emotional Support Helpline",
      contact: "+91-95822-17430",
      desc: "",
    },
  ];

  const internationalHelplines = [
    { name: "Suicide Prevention Lifeline (USA)", contact: "988" },
    { name: "Samaritans (UK)", contact: "116 123 (24x7)" },
  ];

  const onlineResources = [
    {
      name: "WHO Mental Health",
      link: "https://www.who.int/health-topics/mental-health",
    },
    {
      name: "National Institute of Mental Health",
      link: "https://www.nimh.nih.gov/",
    },
    {
      name: "Manodarpan (India Govt Initiative)",
      link: "https://manodarpan.education.gov.in/",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6C63FF, #FF6584)",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          textAlign: "center",
          padding: "60px 20px 40px 20px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          borderRadius: "0 0 30px 30px",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "10px" }}>
          🚑 Emergency Help
        </h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.85 }}>
          If you are in crisis, please reach out immediately
        </p>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px", display: "grid", gap: "40px" }}>
        {/* India Helplines */}
        <section>
          <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#FFE066" }}>
            📞 Toll-Free Helplines (India)
          </h2>
          <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            {indiaHelplines.map((helpline, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  padding: "25px",
                  borderRadius: "20px",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 12px 35px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
                }}
              >
                <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "8px" }}>{helpline.name}</h3>
                <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
                  {helpline.contact} {helpline.desc}
                </p>
                <button
                  style={{
                    padding: "10px 20px",
                    borderRadius: "50px",
                    border: "none",
                    background: "#FFE066",
                    color: "#6C63FF",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onClick={() => (window.location.href = `tel:${helpline.contact}`)}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  Call Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* International Helplines */}
        <section>
          <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#FFE066" }}>
            🌍 International Hotlines
          </h2>
          <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            {internationalHelplines.map((helpline, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  padding: "25px",
                  borderRadius: "20px",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 12px 35px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
                }}
              >
                <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "8px" }}>{helpline.name}</h3>
                <p style={{ fontSize: "1rem", marginBottom: "10px" }}>{helpline.contact}</p>
                <button
                  style={{
                    padding: "10px 20px",
                    borderRadius: "50px",
                    border: "none",
                    background: "#FFE066",
                    color: "#6C63FF",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onClick={() => (window.location.href = `tel:${helpline.contact}`)}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  Call Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Online Resources */}
        <section>
          <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px", color: "#FFE066" }}>
            🧠 Online Resources
          </h2>
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "25px",
              borderRadius: "20px",
              backdropFilter: "blur(8px)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
            }}
          >
            <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "#fff", gap: "10px", display: "flex", flexDirection: "column" }}>
              {onlineResources.map((res, i) => (
                <li key={i}>
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#FFE066", textDecoration: "underline" }}
                  >
                    {res.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          fontSize: "0.9rem",
          opacity: 0.8,
        }}
      >
        ⚠️ This page is for informational purposes only. In case of emergency, please call your local emergency number immediately.
      </footer>
    </div>
  );
};

export default EmergencyHelp;
