import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Fetch available languages and voice catalog from backend
export const fetchVoices = async () => {
  const response = await axios.get(`${API_BASE_URL}/voices`);
  return response.data;
};

// Send speech generation request to backend (ElevenLabs API route)
export const generateSpeech = async (payload) => {
  const response = await axios.post(`${API_BASE_URL}/tts`, payload);
  return response.data;
};