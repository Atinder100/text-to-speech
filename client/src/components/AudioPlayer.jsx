import React from 'react';

function AudioPlayer({ audioUrl }) {
  if (!audioUrl) return null;

  return (
    <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
      <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#2d3748' }}>Generated Audio</h3>
      <audio controls style={{ width: '100%' }} src={audioUrl}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;