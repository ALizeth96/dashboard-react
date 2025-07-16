import React from 'react';

const UserTable = ({ users, searchTerm }) => {
  const filteredUsers = users.filter(user =>
    user.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredUsers.length === 0 ? (
        <p>No se encontraron usuarios.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Nombre</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Email</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>País</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{user.name}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{user.email}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{user.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;
