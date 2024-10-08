import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./DiagnosisSearch.css";
import { fetchDiagnoses } from '../services/diagnosisService';

const DiagnosisSearch = () => {
    const [query, setQuery] = useState('');
    const [diagnoses, setDiagnoses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const navigate = useNavigate();

  // Simulated list of diagnosis suggestions
//   const diagnoses = [
//     "Hypertension",
//     "Diabetes Mellitus",
//     "Asthma",
//     "Chronic Obstructive Pulmonary Disease",
//     "Coronary Artery Disease",
//   ];

//   const handleSearch = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);

//     if (value.length > 0) {
//       const filteredSuggestions = diagnoses.filter((diagnosis) =>
//         diagnosis.toLowerCase().includes(value.toLowerCase())
//       );
//       setSuggestions(filteredSuggestions);
//     } else {
//       setSuggestions([]);
//     }
//   };

const handleSearch = async () => {
    try {
      const results = await fetchDiagnoses(query);
      setDiagnoses(results); // Store the fetched diagnoses in state
    } catch (error) {
      console.error('Failed to fetch diagnoses:', error);
    }
  };

//   const handleSelectDiagnosis = (diagnosis) => {
//     // Navigate to the Medication List screen with the selected diagnosis
//     navigate(`/medications/${diagnosis}`);
//   };

return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a diagnosis"
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {diagnoses.map((diagnosis) => (
          <li key={diagnosis.id}>{diagnosis.name}</li> // Adjust based on your data structure
        ))}
      </ul>
    </div>
  );
};

export default DiagnosisSearch;