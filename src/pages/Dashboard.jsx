import React from 'react';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from 'react';
import UserTable from '../components/UserTable';

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');

const [users, setUsers] = useState([]);

useEffect(() => {
  fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(data => {
      const formattedUsers = data.results.map(user => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        country: user.location.country,
      }));
      setUsers(formattedUsers);
    })
    .catch(error => console.error('Error fetching users:', error));
}, []);

  return (
    <>
      <Navbar />

      <main style={{ padding: '1rem' }}>
        <section>
          <h2>Usuarios activos (último minuto)</h2>
          <UserCard count={152} />

        </section>

        <section>
          <h2>Buscar / Filtrar por país</h2>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        </section>

        <section>
          <h2>Listado de usuarios</h2>
          <UserTable users={users} searchTerm={searchTerm} />

        </section>
      </main>
    </>
  );
};

export default Dashboard;
