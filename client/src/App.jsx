import React, { useState } from 'react';
import TextInput from './components/TextInput';
import VoiceSelector from './components/VoiceSelector';

function App() {
  const [text, setText] = useState('');
  
  // Initial Mock Data for Languages and Voices matching Section 8 of PDF
  const mockLanguages = [
    { code: 'en-US', name: 'English (US)' },
    { code: 'hi-IN', name: 'Hindi (India)' },
    { code: 'es-ES', name: 'Spanish (Spain)' }
  ];

  const mockVoices = [
    { name: 'English Voice 1', language: 'en-US', gender: 'Female' },
    { name: 'English Voice 2', language: 'en-US', gender: 'Male' },
    { name: 'Hindi Voice 1', language: 'hi-IN', gender: 'Female' },
    { name: 'Hindi Voice 2', language: 'hi-IN', gender: 'Male' },
    { name: 'Spanish Voice 1', language: 'es-ES', gender: 'Male' },
    { name: 'Spanish Voice 2', language: 'es-ES', gender: 'Female' }

  ];

  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const [selectedVoice, setSelectedVoice] = useState('English Voice 1');

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '2rem auto', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#2c3e50' }}>Text-to-Speech Application</h1>
      
      <TextInput text={text} setText={setText} maxLength={500} />

      <VoiceSelector 
        languages={mockLanguages}
        voices={mockVoices}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        selectedVoice={selectedVoice}
        setSelectedVoice={setSelectedVoice}
      />
    </div>
  );
}

export default App;