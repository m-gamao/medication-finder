import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DiagnosisSearch from "./components/DiagnosisSearch";
import MedicationList from "./components/MedicationList"; // Medication List screen (we'll create it next)
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DiagnosisSearch />} />
          <Route path="/medications/:diagnosis" element={<MedicationList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
