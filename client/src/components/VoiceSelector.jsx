import React from 'react';

function VoiceSelector({ 
  languages = [], 
  voices = [], 
  selectedLanguage, 
  setSelectedLanguage, 
  selectedVoice, 
  setSelectedVoice 
}) {
  
  // Filter voices based on selected language
  const availableVoices = voices.filter(v => v.language === selectedLanguage);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    
    // Automatically set voice to the first voice matching the selected language
    const defaultVoice = voices.find(v => v.language === newLang);
    if (defaultVoice) {
      setSelectedVoice(defaultVoice.name);
    } else {
      setSelectedVoice('');
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
      <div>
        <label htmlFor="language-select" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Language:
        </label>
        <select
          id="language-select"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          style={{
            width: '100%',
            padding: '0.6rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '0.95rem'
          }}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="voice-select" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Voice:
        </label>
        <select
          id="voice-select"
          value={selectedVoice}
          onChange={(e) => setSelectedVoice(e.target.value)}
          style={{
            width: '100%',
            padding: '0.6rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '0.95rem'
          }}
        >
          {availableVoices.length > 0 ? (
            availableVoices.map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name} ({voice.gender})
              </option>
            ))
          ) : (
            <option value="">No voices available</option>
          )}
        </select>
      </div>
    </div>
  );
}

export default VoiceSelector;