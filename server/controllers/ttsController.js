import axios from 'axios';
import { validateTextLanguage } from '../utils/languageValidator.js';


const VOICE_MAPPING = {
  'en-US-Female': 'pFZP5JQG7iQjIQuC4Bku', 
  'en-US-Male': 'bIHbv24MWmeRgasZH58o',   
  
  'hi-IN-Female': 'pdEaoUuGlAqs8ryKsZvg', 
  'hi-IN-Male': 'y9vwvKSWIRPkG4AdHL3E',   
  
  'es-ES-Female': 'pFZP5JQG7iQjIQuC4Bku', 
  'es-ES-Male': 'cjVigY5qzO86Huf0OWal'
};

export const generateSpeech = async (req, res) => {
  try {
    const { text, language, voice } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({
        success: false,
        error: { message: 'Text prompt cannot be empty.' }
      });
    }

    const validation = validateTextLanguage(text, language);
    if (!validation.valid) {
      return res.status(400).json({
        success: false,
        error: { message: validation.message }
      });
    }

    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      console.error('API Error: ELEVENLABS_API_KEY missing from .env');
      return res.status(500).json({
        success: false,
        error: { message: 'ElevenLabs API key missing in backend configuration.' }
      });
    }

    // Determine target gender from selector text or fallback
    const isMale = voice?.toLowerCase().includes('2') || voice?.toLowerCase().includes('male');
    const gender = isMale ? 'Male' : 'Female';
    const voiceKey = `${language}-${gender}`;
    
    // Fallback default voice ID (Rachel)
    const voiceId = VOICE_MAPPING[voiceKey] || '21m00Tcm4TlvDq8ikWAM';

    const response = await axios({
      method: 'post',
      url: `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      headers: {
        'Accept': 'audio/mpeg',
        'xi-api-key': apiKey,
        'Content-Type': 'application/json'
      },
      data: {
        text: text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      },
      responseType: 'arraybuffer'
    });

    const base64Audio = Buffer.from(response.data, 'binary').toString('base64');
    const audioUrl = `data:audio/mp3;base64,${base64Audio}`;

    return res.status(200).json({
      success: true,
      data: {
        audioUrl,
        text,
        language,
        voice,
        generatedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    if (error.response && error.response.data) {
      const errorBuffer = Buffer.from(error.response.data).toString('utf-8');
      console.error('ElevenLabs API Failure Detail:', errorBuffer);
    } else {
      console.error('ElevenLabs API Error:', error.message);
    }

    return res.status(500).json({
      success: false,
      error: { message: 'Failed to synthesize speech via ElevenLabs API.' }
    });
  }
};