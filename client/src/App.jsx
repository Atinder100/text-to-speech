import React, { useState } from 'react';
import TextInput from './components/TextInput';
import VoiceSelector from './components/VoiceSelector';
import GenerateButton from './components/GenerateButton';
import AudioPlayer from './components/AudioPlayer';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [text, setText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const [selectedVoice, setSelectedVoice] = useState('English Voice 1');
  
  // App operational state
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  // Mock data matching Section 8 requirements
  const mockLanguages = [
    { code: 'en-US', name: 'English (US)' },
    { code: 'hi-IN', name: 'Hindi (India)' },
    { code: 'es-ES', name: 'Spanish (Spain)' }
  ];

  const mockVoices = [
    { name: 'English Voice 1', language: 'en-US', gender: 'Female' },
    { name: 'English Voice 2', language: 'en-US', gender: 'Male' },
    { name: 'Hindi Voice 1', language: 'hi-IN', gender: 'Female' },
    { name: 'Spanish Voice 1', language: 'es-ES', gender: 'Male' }
  ];

  const handleGenerateSpeech = () => {
    setErrorMessage('');
    
    // Front-end validation checks
    if (!text.trim()) {
      setErrorMessage('Please enter some text before generating speech.');
      return;
    }

    if (text.length > 500) {
      setErrorMessage('Text exceeds the maximum character limit (500).');
      return;
    }

    setIsLoading(true);

    // Simulate backend API latency until Day 8 Node.js setup
    setTimeout(() => {
      // Mock generated sample MP3 URL
      setAudioUrl('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '2rem auto', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#2c3e50' }}>Text-to-Speech Application</h1>
      
      <ErrorMessage message={errorMessage} onClose={() => setErrorMessage('')} />

      <TextInput text={text} setText={setText} maxLength={500} />

      <VoiceSelector 
        languages={mockLanguages}
        voices={mockVoices}
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

      <AudioPlayer audioUrl={audioUrl} />
    </div>
  );
}

export default App;