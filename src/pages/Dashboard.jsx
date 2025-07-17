import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Filtros from "../components/Filtros";
import ResumenPanel from "../ResumenPanel/ResumenPanel";
import "../ResumenPanel/ResumenPanel.css";
import "../components/Filtros.css";
import "../pages/Dashboard.css";

const usersData = [
  {
    nombre: "Ana Martínez",
    estado: "Activo",
    pais: "Colombia",
    correo: "ana@email.com",
    ultimoIngreso: "2025-07-15 09:30 AM",
  },
  {
    nombre: "Carlos Pérez",
    estado: "Inactivo",
    pais: "México",
    correo: "carlos@email.com",
    ultimoIngreso: "2025-07-10 04:15 PM",
  },
  {
    nombre: "Luisa Gómez",
    estado: "Activo",
    pais: "Chile",
    correo: "luisa@email.com",
    ultimoIngreso: "2025-07-16 08:10 AM",
  },
  {
    nombre: "María López",
    estado: "Activo",
    pais: "México",
    correo: "maria@email.com",
    ultimoIngreso: "2025-07-14 11:22 AM",
  },
  {
    nombre: "Pedro Sánchez",
    estado: "Inactivo",
    pais: "Colombia",
    correo: "pedro@email.com",
    ultimoIngreso: "2025-07-12 02:00 PM",
  },
  {
    nombre: "Sofía Ramírez",
    estado: "Activo",
    pais: "Perú",
    correo: "sofia@email.com",
    ultimoIngreso: "2025-07-15 09:05 AM",
  },
  {
    nombre: "Javier Torres",
    estado: "Activo",
    pais: "Argentina",
    correo: "javier@email.com",
    ultimoIngreso: "2025-07-13 05:50 PM",
  },
  {
    nombre: "Camila Fernández",
    estado: "Inactivo",
    pais: "Chile",
    correo: "camila@email.com",
    ultimoIngreso: "2025-07-09 08:15 AM",
  },
  {
    nombre: "Diego Castro",
    estado: "Activo",
    pais: "Colombia",
    correo: "diego@email.com",
    ultimoIngreso: "2025-07-11 10:00 AM",
  },
  {
    nombre: "Elena Vargas",
    estado: "Activo",
    pais: "Venezuela",
    correo: "elena@email.com",
    ultimoIngreso: "2025-07-17 09:00 AM",
  },
];

const Dashboard = () => {
  const [paisSeleccionado, setPaisSeleccionado] = useState("");
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("todas");
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(usersData);

  const filtrarUsuarios = () => {
    const filtrados = usersData.filter((user) => {
      const paisCoincide =
        paisSeleccionado.trim() === "" ||
        user.pais.toLowerCase().includes(paisSeleccionado.toLowerCase());

      const estadoCoincide =
        estadoSeleccionado === "todas" ||
        user.estado.toLowerCase() === estadoSeleccionado.toLowerCase();

      return paisCoincide && estadoCoincide;
    });

    setUsuariosFiltrados(filtrados);
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          <Filtros
            pais={paisSeleccionado}
            setPais={setPaisSeleccionado}
            estado={estadoSeleccionado}
            setEstado={setEstadoSeleccionado}
            onFiltrar={filtrarUsuarios}
          />
          <ResumenPanel users={usuariosFiltrados} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

