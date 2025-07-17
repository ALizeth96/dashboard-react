import React from "react";
import Navbar from "../components/Navbar";
import Filtros from "../components/Filtros";
import ResumenPanel from "../ResumenPanel/ResumenPanel";
import "../ResumenPanel/ResumenPanel.css";
import "../components/Filtros.css";
import "../pages/Dashboard.css"; // Puedes mover este estilo a ResumenPanel.css si prefieres centralizar

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          <Filtros />
          <ResumenPanel />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

