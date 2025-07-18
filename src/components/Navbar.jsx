import React from 'react';
import './Navbar.css';
import { Bell, HelpCircle, Settings } from 'lucide-react'; 
import lizeth from '../assets/OIP.webp';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Barra de navegación principal">
      {/* Sección izquierda */}
      <div className="navbar-left">
        <h1 className="navbar-title">Dashboard Pro</h1>
      </div>

      {/* Sección derecha */}
      <div className="navbar-right">
        <div className="navbar-icons" role="group" aria-label="Acciones del usuario">
          <button aria-label="Ver notificaciones" tabIndex={0}><Bell size={22} /></button>
          <button aria-label="Centro de ayuda" tabIndex={0}><HelpCircle size={22} /></button>
          <button aria-label="Configuración de la cuenta" tabIndex={0}><Settings size={22} /></button>
        </div>

        {/* Perfil */}
        <div className="navbar-profile" aria-label="Perfil de usuario" role="region">
          <img src={lizeth} alt="Foto de perfil de Lizeth" className="navbar-avatar" />
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



