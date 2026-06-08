import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  // Strips out spaces, numbers, and special characters, counting only a-z and A-Z
  const letterCount = text.replace(/[^a-zA-Z]/g, '').length;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.heading}>Letter Counter</h1>
          <p style={styles.subtitle}>Instantly count alphabetic characters, ignoring spaces and symbols.</p>
        </div>
        
        <textarea 
          style={styles.textarea}
          rows="6"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
        />
        
        <div style={styles.footer}>
          <h2 style={styles.resultText}>
            Count: <span style={styles.badge}>{letterCount}</span>
          </h2>
          <button 
            style={{
              ...styles.button, 
              opacity: text.length === 0 ? 0.5 : 1,
              cursor: text.length === 0 ? 'not-allowed' : 'pointer'
            }} 
            onClick={() => setText('')}
            disabled={text.length === 0}
          >
            Clear Text
          </button>
        </div>
      </div>
    </div>  
  );
}

// Minimal, modern styling object
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f9',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    padding: '2rem'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    width: '100%',
    maxWidth: '500px',
  },
  header: {
    marginBottom: '1.5rem',
  },
  heading: {
    margin: '0 0 0.5rem 0',
    color: '#333333',
    fontSize: '1.75rem',
  },
  subtitle: {
    margin: '0',
    color: '#666666',
    fontSize: '0.95rem',
    lineHeight: '1.4',
  },
  textarea: {
    width: '100%',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    fontSize: '1rem',
    resize: 'vertical',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
    outline: 'none',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1.5rem',
  },
  resultText: {
    margin: '0',
    color: '#333333',
    fontSize: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  badge: {
    backgroundColor: '#eef2ff',
    color: '#4f46e5',
    padding: '0.25rem 0.75rem',
    borderRadius: '999px',
    fontWeight: 'bold',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    transition: 'opacity 0.2s',
  }
};

export default App;