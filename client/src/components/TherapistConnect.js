import React from "react";

function TherapistConnect() {
  const therapists = [
    {
      name: "Dr. Ananya Sharma",
      specialization: "Anxiety, Stress Management",
      contact: "+91 98765 43210",
      email: "ananya.sharma@mindcare.com",
      address: "MindCare Clinic, 2nd Floor, MG Road, Bengaluru",
      discount: "20% off first 3 sessions",
    },
    {
      name: "Dr. Rohan Mehta",
      specialization: "Depression, Sleep Disorders",
      contact: "+91 91234 56789",
      email: "rohan.mehta@wellnesshub.com",
      address: "Wellness Hub, Near City Hospital, Pune",
      discount: "15% off online consultations",
    },
    {
      name: "Dr. Priya Nair",
      specialization: "Adolescent Mental Health, Trauma",
      contact: "+91 99876 54321",
      email: "priya.nair@healingtouch.com",
      address: "Healing Touch Center, Marine Drive, Mumbai",
      discount: "Free first consultation",
    },
  ];

  return (
    <div style={{ padding: "50px" }}>
      <h1>🧑‍⚕️ Therapist Connect</h1>
      <p>Find trusted therapists and get exclusive discounts when booking through our site.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {therapists.map((t, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{t.name}</h3>
            <p>
              <strong>Specialization:</strong> {t.specialization}
            </p>
            <p>
              <strong>Contact:</strong> {t.contact}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${t.email}`}>{t.email}</a>
            </p>
            <p>
              <strong>Address:</strong> {t.address}
            </p>
            <p style={{ color: "green", fontWeight: "bold" }}>🎉 {t.discount}</p>
            <button
              onClick={() => (window.location = `mailto:${t.email}`)}
              style={{
                marginTop: "10px",
                padding: "10px 15px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Contact Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TherapistConnect;
