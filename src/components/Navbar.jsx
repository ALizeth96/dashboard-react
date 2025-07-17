import React from 'react';
import './Navbar.css';
import { Bell, HelpCircle, Settings } from 'lucide-react'; 
import lizeth from '../assets/OIP.webp';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Sección izquierda */}
      <div className="navbar-left">
        <h1 className="navbar-title">Dashboard Pro</h1>
      </div>

      {/* Sección derecha */}
      <div className="navbar-right">
        <div className="navbar-icons">
          <button aria-label="Notificaciones"><Bell size={22} /></button>
          <button aria-label="Ayuda"><HelpCircle size={22} /></button>
          <button aria-label="Configuración"><Settings size={22} /></button>
        </div>

        {/* Perfil */}
        <div className="navbar-profile">
          <img src={lizeth} alt="Lizeth" className="navbar-avatar" />
          <div className="profile-info">
            <p className="profile-name"> Lizeth</p>
            <p className="profile-company">E-Group</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





