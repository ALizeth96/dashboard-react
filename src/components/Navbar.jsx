import React from 'react';
import { Users } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Users className="navbar-icon" size={32} />
        <h1 className="navbar-title">Panel de Usuarios</h1>
      </div>
    </nav>
  );
};

export default Navbar;
