import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DiagnosisSearch from "./components/DiagnosisSearch";
import MedicationList from "./components/MedicationList";
import MedicationDetails from "./components/MedicationDetails"; // New component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DiagnosisSearch />} />
          <Route path="/medications/:diagnosis" element={<MedicationList />} />
          <Route path="/medications/:diagnosis/:medication" element={<MedicationDetails />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
