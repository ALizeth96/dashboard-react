// 📁 src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Filtros from "../components/Filtros";
import ResumenPanel from "../ResumenPanel/ResumenPanel";
import "../ResumenPanel/ResumenPanel.css";
import "../components/Filtros.css";
import "../pages/Dashboard.css";

const Dashboard = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);
  const [paisSeleccionado, setPaisSeleccionado] = useState("");
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("todas");

  // Llamada a la API pública
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1000")
      .then((res) => res.json())
      .then((data) => {
        const formateados = data.results.map((user) => ({
          nombre: `${user.name.first} ${user.name.last}`,
          estado: Math.random() > 0.5 ? "Activo" : "Inactivo",
          pais: user.location.country,
          correo: user.email,
          ultimoIngreso: user.registered.date,
        }));
        setUsuarios(formateados);
        setUsuariosFiltrados(formateados);
      })
      .catch((err) => console.error("Error al cargar usuarios:", err));
  }, []);

  // Filtrado por país y estado
  const filtrarUsuarios = () => {
    const filtrados = usuarios.filter((user) => {
      const coincidePais =
        paisSeleccionado.trim() === "" ||
        user.pais.toLowerCase().includes(paisSeleccionado.toLowerCase());

      const coincideEstado =
        estadoSeleccionado === "todas" ||
        user.estado.toLowerCase() === estadoSeleccionado.toLowerCase();

      return coincidePais && coincideEstado;
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
          <ResumenPanel
            users={usuariosFiltrados}
            filtroEstado={estadoSeleccionado}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
