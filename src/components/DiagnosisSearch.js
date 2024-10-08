// src/components/DiagnosisSearch.js
import React, { useState } from "react";

const DiagnosisSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Simulated list of diagnosis suggestions
  const diagnoses = [
    "Hypertension",
    "Diabetes Mellitus",
    "Asthma",
    "Chronic Obstructive Pulmonary Disease",
    "Coronary Artery Disease",
  ];

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredSuggestions = diagnoses.filter((diagnosis) =>
        diagnosis.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="diagnosis-search">
      <h2>Search for a Diagnosis</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Enter diagnosis..."
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DiagnosisSearch;
