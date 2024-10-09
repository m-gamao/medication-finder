import axios from 'axios';

const API_BASE_URL = 'API_BASE_URL'; 
const API_KEY = 'YOUR_API_KEY'; 

// Function to fetch diagnoses based on a search term
export const fetchDiagnoses = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search/${query}`, {
      params: {
        key: API_KEY, // Send the API key as a query parameter
      },
    });
    return response.data; // Adjust based on your API response structure
  } catch (error) {
    console.error('Error fetching diagnoses:', error);
    throw error; // Rethrow or handle the error appropriately
  }
};
