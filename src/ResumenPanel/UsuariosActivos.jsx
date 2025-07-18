import React from "react";
import "./ResumenPanel.css";

const UsuariosActivos = ({ users }) => {
  const activos = users.filter((user) => user.isActive).length;
  const color = activos > 0 ? "#10b981" : "#ef4444"; // verde o rojo

  return (
    <div className="usuarios-activos card-panel">
      <h3>Usuarios activos {activos > 0 ? "🟢" : "🔴"}</h3>
      <div className="total-activos" style={{ color }}>
        {activos}
      </div>
      <div className="total-pagos-label">
        Usuarios activos en el último minuto (simulado)
      </div>
      <div className="actualizado-label">
        Información actualizada al {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};

export default UsuariosActivos;

