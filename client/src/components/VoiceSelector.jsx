import React from 'react';

function VoiceSelector({ 
  languages = [], 
  voices = [], 
  selectedLanguage, 
  setSelectedLanguage, 
  selectedVoice, 
  setSelectedVoice 
}) {
  const availableVoices = voices.filter(v => v.language === selectedLanguage);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    
    const defaultVoice = voices.find(v => v.language === newLang);
    if (defaultVoice) {
      setSelectedVoice(defaultVoice.name);
    } else {
      setSelectedVoice('');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="language-select" className="block text-sm font-semibold text-slate-700 mb-1">
          Language
        </label>
        <select
          id="language-select"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="w-full p-2.5 text-sm bg-white border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="voice-select" className="block text-sm font-semibold text-slate-700 mb-1">
          Voice
        </label>
        <select
          id="voice-select"
          value={selectedVoice}
          onChange={(e) => setSelectedVoice(e.target.value)}
          className="w-full p-2.5 text-sm bg-white border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
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