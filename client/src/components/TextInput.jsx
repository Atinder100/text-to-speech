import React from 'react';

function TextInput({ text, setText, maxLength = 500 }) {
  
  const charCount = text.length;
  
  
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  
  const isOverLimit = charCount > maxLength;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <label htmlFor="text-input" style={{ fontWeight: 'bold' }}>
          Enter your text:
        </label>
        {text && (
          <button 
            onClick={handleClear} 
            style={{ cursor: 'pointer', border: 'none', background: 'none', color: '#d9534f' }}
          >
            Clear Text
          </button>
        )}
      </div>

      <textarea
        id="text-input"
        value={text}
        onChange={handleChange}
        placeholder="Type or paste your text here..."
        rows={6}
        style={{
          width: '100%',
          padding: '0.75rem',
          borderRadius: '6px',
          border: isOverLimit ? '2px solid #d9534f' : '1px solid #ccc',
          fontSize: '1rem',
          resize: 'vertical',
          boxSizing: 'border-box'
        }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginTop: '0.25rem', color: isOverLimit ? '#d9534f' : '#666' }}>
        <span>Words: {wordCount}</span>
        <span>
          Characters: {charCount} / {maxLength}
        </span>
      </div>

      {isOverLimit && (
        <p style={{ color: '#d9534f', fontSize: '0.85rem', marginTop: '0.25rem' }}>
          Character limit exceeded! Please shorten your text.
        </p>
      )}
    </div>
  );
}

export default TextInput;