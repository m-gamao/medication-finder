import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/'; // Replace with my chosen API base URL

// Function to fetch diagnoses based on a search term
export const fetchDiagnoses = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/diagnoses`, {
      params: {
        search: query,
      },
    });
    return response.data; // Adjust based on the API response structure
  } catch (error) {
    console.error('Error fetching diagnoses:', error);
    throw error; // Rethrow or handle the error appropriately
  }
};
