import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MedicationList.css";

const MedicationList = () => {
  const { diagnosis } = useParams();
  const navigate = useNavigate();

  const medications = {
    Hypertension: ["Amlodipine", "Lisinopril", "Metoprolol"],
    "Diabetes Mellitus": ["Metformin", "Insulin", "Glipizide"],
    Asthma: ["Albuterol", "Fluticasone", "Budesonide"],
    "Chronic Obstructive Pulmonary Disease": ["Tiotropium", "Ipratropium", "Albuterol"],
    "Coronary Artery Disease": ["Aspirin", "Clopidogrel", "Atorvastatin"],
  };

  const handleMedicationClick = (medication) => {
    navigate(`/medications/${diagnosis}/${medication}`);
  };

  return (
    <div className="medication-list">
      <h2>Medications for {diagnosis}</h2>
      <ul>
        {medications[diagnosis]?.map((medication, index) => (
          <li key={index} onClick={() => handleMedicationClick(medication)}>
            {medication}
          </li>
        )) || <p>No medications found for this diagnosis.</p>}
      </ul>
    </div>
  );
};

export default MedicationList;
