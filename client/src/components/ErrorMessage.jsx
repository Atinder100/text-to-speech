import React from 'react';

function ErrorMessage({ message, onClose }) {
  if (!message) return null;

  return (
    <div
      style={{
        padding: '0.75rem 1rem',
        backgroundColor: '#fed7d7',
        border: '1px solid #f5c6cb',
        borderRadius: '6px',
        color: '#9b2c2c',
        fontSize: '0.9rem',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: '#9b2c2c',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginLeft: '1rem'
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;