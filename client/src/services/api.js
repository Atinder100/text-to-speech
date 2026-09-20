import axios from 'axios';


const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
const API_BASE_URL = rawBaseUrl.endsWith('/api') ? rawBaseUrl : `${rawBaseUrl.replace(/\/$/, '')}/api`;

export const fetchVoices = async () => {
  const response = await axios.get(`${API_BASE_URL}/voices`);
  return response.data;
};

export const generateSpeech = async (payload) => {
  const response = await axios.post(`${API_BASE_URL}/tts`, payload);
  return response.data;
};