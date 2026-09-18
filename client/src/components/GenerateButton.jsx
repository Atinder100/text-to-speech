import React from 'react';

function GenerateButton({ onClick, isLoading, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      style={{
        width: '100%',
        padding: '0.8rem',
        backgroundColor: disabled || isLoading ? '#a0aec0' : '#3182ce',
        color: '#ffffff',
        border: 'none',
        borderRadius: '6px',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
        marginBottom: '1.5rem',
        transition: 'background-color 0.2s'
      }}
    >
      {isLoading ? 'Generating Speech...' : 'Generate Speech'}
    </button>
  );
}

export default GenerateButton;