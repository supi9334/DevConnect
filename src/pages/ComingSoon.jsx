import React from 'react';

const ComingSoon = ({ title }) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '80vh',
      color: 'gray'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>🚧</h1>
      <h2>{title} Page</h2>
      <p>This feature is coming soon to DevConnect!</p>
    </div>
  );
};

export default ComingSoon;
