import React from "react";
import { useParams } from "react-router-dom";
import "./MedicationList.css";

const MedicationList = () => {
  const { diagnosis } = useParams(); // Get the selected diagnosis from the URL

  // Simulated medication list for each diagnosis
  const medications = {
    Hypertension: ["Amlodipine", "Lisinopril", "Metoprolol"],
    "Diabetes Mellitus": ["Metformin", "Insulin", "Glipizide"],
    Asthma: ["Albuterol", "Fluticasone", "Budesonide"],
    "Chronic Obstructive Pulmonary Disease": ["Tiotropium", "Ipratropium", "Albuterol"],
    "Coronary Artery Disease": ["Aspirin", "Clopidogrel", "Atorvastatin"],
  };

  return (
    <div className="medication-list">
      <h2>Medications for {diagnosis}</h2>
      <ul>
        {medications[diagnosis]?.map((medication, index) => (
          <li key={index}>{medication}</li>
        )) || <p>No medications found for this diagnosis.</p>}
      </ul>
    </div>
  );
};

export default MedicationList;
