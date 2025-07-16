import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import UserTable from '../components/UserTable';
import '../pages/Dashboard.css';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => {
        if (!response.ok) throw new Error('Error al obtener los usuarios');
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
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <main className="dashboard-container">
  <section className="panel-card">
    <h2 className="section-title">Panel de usuarios</h2>
    <p>Filtrar por país:</p>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  </section>

  <section className="table-card">
    <h2 className="section-title">Listado de usuarios</h2>
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
