import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DiagnosisSearch.css";

const DiagnosisSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

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

  const handleSelectDiagnosis = (diagnosis) => {
    // Navigate to the Medication List screen with the selected diagnosis
    navigate(`/medications/${diagnosis}`);
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
            <li key={index} onClick={() => handleSelectDiagnosis(suggestion)}>
            {suggestion}
          </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DiagnosisSearch;
