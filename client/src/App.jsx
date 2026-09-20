import React, { useState, useEffect } from 'react';
import TextInput from './components/TextInput';
import VoiceSelector from './components/VoiceSelector';
import GenerateButton from './components/GenerateButton';
import AudioPlayer from './components/AudioPlayer';
import ErrorMessage from './components/ErrorMessage';
import { fetchVoices, generateSpeech } from './services/api';

function App() {
  const [text, setText] = useState('');
  const [languages, setLanguages] = useState([]);
  const [voices, setVoices] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  useEffect(() => {
    const loadVoices = async () => {
      try {
        const response = await fetchVoices();
        if (response.success && response.data) {
          const { languages: loadedLanguages, voices: loadedVoices } = response.data;
          setLanguages(loadedLanguages);
          setVoices(loadedVoices);

          if (loadedLanguages.length > 0) {
            setSelectedLanguage(loadedLanguages[0].code);
            const defaultVoice = loadedVoices.find(v => v.language === loadedLanguages[0].code);
            if (defaultVoice) setSelectedVoice(defaultVoice.name);
          }
        }
      } catch (err) {
        console.error('Failed to connect to server:', err);
        setErrorMessage('Failed to fetch voice catalog. Is the backend running on port 5000?');
      }
    };

    loadVoices();
  }, []);

  const handleGenerateSpeech = async () => {
    setErrorMessage('');
    
    if (!text.trim()) {
      setErrorMessage('Please enter some text before generating speech.');
      return;
    }

    if (text.length > 500) {
      setErrorMessage('Text exceeds the maximum character limit (500).');
      return;
    }

    setIsLoading(true);

    try {
      const response = await generateSpeech({
        text,
        language: selectedLanguage,
        voice: selectedVoice
      });

      if (response.success && response.data) {
        setAudioUrl(response.data.audioUrl);
      } else {
        setErrorMessage('Failed to generate audio output.');
      }
    } catch (err) {
      console.error('TTS Generation error:', err);
      const serverMsg = err.response?.data?.error?.message || 'Server error during speech generation.';
      setErrorMessage(serverMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-blue-100 rounded-xl shadow-md border border-slate-200 p-6 md:p-8 space-y-6">
        <header className="text-center border-b border-slate-100 pb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            Text-to-Speech Studio
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Convert your prompt into natural audio across multiple languages
          </p>
        </header>
        
        <ErrorMessage message={errorMessage} onClose={() => setErrorMessage('')} />

        <div className="space-y-4">
          <TextInput text={text} setText={setText} maxLength={500} />

          <VoiceSelector 
            languages={languages}
            voices={voices}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            selectedVoice={selectedVoice}
            setSelectedVoice={setSelectedVoice}
          />

          <GenerateButton 
            onClick={handleGenerateSpeech} 
            isLoading={isLoading} 
            disabled={!text.trim() || text.length > 500} 
          />
        </div>

        <AudioPlayer audioUrl={audioUrl} />
      </div>
    </div>
  );
}

export default App;