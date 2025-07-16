import React from 'react';

const UserCard = ({ count }) => {
  return (
    <div style={{
      padding: '1rem',
      backgroundColor: '#f1f5f9',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '1rem',
      maxWidth: '300px'
    }}>
      <h3 style={{ marginBottom: '0.5rem' }}>Usuarios activos</h3>
      <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{count}</p>
    </div>
  );
};

export default UserCard;
