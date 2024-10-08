import React from "react";
import { useParams } from "react-router-dom";
import "./MedicationDetails.css";

const MedicationDetails = () => {
  const { medication } = useParams();

  // Simulated medication details
  const medicationInfo = {
    Amlodipine: {
      dosage: "5-10 mg once daily",
      sideEffects: ["Swelling", "Dizziness", "Fatigue"],
      description: "Amlodipine is used to treat high blood pressure.",
    },
    Lisinopril: {
      dosage: "10-40 mg once daily",
      sideEffects: ["Cough", "High potassium", "Low blood pressure"],
      description: "Lisinopril is an ACE inhibitor that treats high blood pressure.",
    },
    Metformin: {
      dosage: "500-2000 mg daily",
      sideEffects: ["Nausea", "Diarrhea", "Stomach upset"],
      description: "Metformin is used to control blood sugar levels in type 2 diabetes.",
    },
    // Add more medications here...
  };

  const info = medicationInfo[medication];

  return (
    <div className="medication-details">
      <h2>{medication}</h2>
      {info ? (
        <div>
          <p><strong>Description:</strong> {info.description}</p>
          <p><strong>Dosage:</strong> {info.dosage}</p>
          <p><strong>Side Effects:</strong> {info.sideEffects.join(", ")}</p>
        </div>
      ) : (
        <p>No information available for this medication.</p>
      )}
    </div>
  );
};

export default MedicationDetails;
