
const voiceCatalog = {
  languages: [
    { code: 'en-US', name: 'English (US)' },
    { code: 'hi-IN', name: 'Hindi (India)' },
    { code: 'es-ES', name: 'Spanish (Spain)' }
  ],
  voices: [
    { name: 'English Voice 1', language: 'en-US', gender: 'Female' },
    { name: 'English Voice 2', language: 'en-US', gender: 'Male' },
    { name: 'Hindi Voice 1', language: 'hi-IN', gender: 'Female' },
    { name: 'Spanish Voice 1', language: 'es-ES', gender: 'Male' }
  ]
};

export const getVoices = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: voiceCatalog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve available voices.'
    });
  }
};