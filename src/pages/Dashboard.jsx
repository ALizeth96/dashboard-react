import React from 'react';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from 'react';
import UserTable from '../components/UserTable';


const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);


const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');

const [users, setUsers] = useState([]);

useEffect(() => {
  fetch('https://randomuser.me/api/?results=50')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
      }
      return response.json();
    })
    .then(data => {
      const formattedUsers = data.results.map(user => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        country: user.location.country,
      }));
      setUsers(formattedUsers);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error fetching users:', error);
      setError(error.message);
      setIsLoading(false);
    });
}, []);


  return (
    <>
      <Navbar />

      <main style={{ padding: '1rem' }}>
        <section>
            <h2>Listado de usuarios</h2>
            {isLoading ? (
    <p>Cargando usuarios...</p>
  ) : error ? (
    <p style={{ color: 'red' }}>Error: {error}</p>
  ) : (
    <UserTable users={users} searchTerm={searchTerm} />
  )}
</section>

      </main>
    </>
  );
};

export default Dashboard;
