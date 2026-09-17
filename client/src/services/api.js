import axios from 'axios';


const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Express server endpoint
  headers: {
    'Content-Type': 'application/json',
  },
});


export const fetchVoices = async () => {
  const response = await API.get('/voices');
  return response.data;
};


export const generateSpeech = async (payload) => {
  const response = await API.post('/tts', payload);
  return response.data;
};

export default API;