import React, { useState, useEffect } from "react";

function SleepTracker() {
  const [sleepTime, setSleepTime] = useState("");
  const [sleepAMPM, setSleepAMPM] = useState("AM");
  const [wakeTime, setWakeTime] = useState("");
  const [wakeAMPM, setWakeAMPM] = useState("AM");
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("sleepRecords")) || [];
    setRecords(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("sleepRecords", JSON.stringify(records));
  }, [records]);

  const to24HourDate = (time, ampm) => {
    if (!time) return null;
    let [hour, minute] = time.split(":").map(Number);
    if (ampm === "PM" && hour !== 12) hour += 12;
    if (ampm === "AM" && hour === 12) hour = 0;
    return new Date(1970, 0, 1, hour, minute);
  };

  const addRecord = () => {
    if (!sleepTime || !wakeTime) {
      alert("Please enter both sleep and wake times.");
      return;
    }

    const sleepDate = to24HourDate(sleepTime, sleepAMPM);
    let wakeDate = to24HourDate(wakeTime, wakeAMPM);

    if (wakeDate <= sleepDate) wakeDate.setDate(wakeDate.getDate() + 1);

    const duration = ((wakeDate - sleepDate) / (1000 * 60 * 60)).toFixed(2);

    const newRecord = {
      date: new Date().toLocaleDateString(),
      sleepTime: `${sleepTime} ${sleepAMPM}`,
      wakeTime: `${wakeTime} ${wakeAMPM}`,
      duration,
    };

    setRecords([newRecord, ...records]);
    setSleepTime("");
    setSleepAMPM("AM");
    setWakeTime("");
    setWakeAMPM("AM");
  };

  const averageSleep = () => {
    if (records.length === 0) return 0;
    const total = records.reduce((sum, r) => sum + parseFloat(r.duration), 0);
    return (total / records.length).toFixed(2);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>😴 Sleep Tracker</h1>
        <p style={styles.subtitle}>Log your sleep patterns and track your rest.</p>

        {/* Input Section */}
        <div style={styles.inputRow}>
          <label style={styles.label}>
            Sleep Time:
            <input
              type="time"
              value={sleepTime}
              onChange={(e) => setSleepTime(e.target.value)}
              style={styles.input}
            />
            <select
              value={sleepAMPM}
              onChange={(e) => setSleepAMPM(e.target.value)}
              style={styles.select}
            >
              <option>AM</option>
              <option>PM</option>
            </select>
          </label>

          <label style={styles.label}>
            Wake Time:
            <input
              type="time"
              value={wakeTime}
              onChange={(e) => setWakeTime(e.target.value)}
              style={styles.input}
            />
            <select
              value={wakeAMPM}
              onChange={(e) => setWakeAMPM(e.target.value)}
              style={styles.select}
            >
              <option>AM</option>
              <option>PM</option>
            </select>
          </label>

          <button onClick={addRecord} style={styles.primaryBtn}>
            Add
          </button>
        </div>

        {/* Average */}
        <h3 style={styles.averageText}>
          Average Sleep: <span style={{ color: "#4CAF50" }}>{averageSleep()}</span> hours
        </h3>

        {/* Records Table */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Sleep Time</th>
              <th style={styles.th}>Wake Time</th>
              <th style={styles.th}>Duration (hrs)</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r, i) => (
              <tr key={i} style={i % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                <td style={styles.td}>{r.date}</td>
                <td style={styles.td}>{r.sleepTime}</td>
                <td style={styles.td}>{r.wakeTime}</td>
                <td style={styles.td}>{r.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#F9F9F9",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "30px",
    maxWidth: "700px",
    width: "100%",
    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: "10px",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "25px",
    textAlign: "center",
  },
  inputRow: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    flexWrap: "wrap",
    marginBottom: "20px",
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    color: "#2C3E50",
  },
  input: {
    marginLeft: "10px",
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  select: {
    marginLeft: "8px",
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  primaryBtn: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  averageText: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2C3E50",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  th: {
    border: "1px solid #ddd",
    padding: "12px",
    backgroundColor: "#2C3E50",
    color: "white",
    textAlign: "center",
  },
  td: {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "center",
  },
  rowEven: { backgroundColor: "#fdfdfd" },
  rowOdd: { backgroundColor: "#f5f5f5" },
};

export default SleepTracker;
