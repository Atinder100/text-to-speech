import React, { useState } from 'react';
import TextInput from './components/TextInput';

function App() {
  const [text, setText] = useState('');

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '2rem auto', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#2c3e50' }}>Text-to-Speech Application</h1>
      
      <TextInput text={text} setText={setText} maxLength={500} />
    </div>
  );
}

export default App;