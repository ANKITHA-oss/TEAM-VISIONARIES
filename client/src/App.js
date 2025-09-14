import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import MoodTracker from "./components/MoodTracker";
import SleepTracker from "./components/SleepTracker";
import EmergencyHelp from "./components/EmergencyHelp";
import TherapistConnect from "./components/TherapistConnect";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mood-tracker" element={<MoodTracker />} />
      <Route path="/sleep-tracker" element={<SleepTracker />} />

      <Route path="/emergency-help" element={<EmergencyHelp />} />
      <Route path="/therapist-connect" element={<TherapistConnect />} />
      
    </Routes>
  );
}

export default App;
