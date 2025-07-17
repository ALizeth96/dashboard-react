import React from "react";
import "./ResumenPanel.css";

const datos = [
  { label: "Total, Ventas", valor: 5.5, color: "#22c55e" },
  { label: "Comisiones", valor: 20.53, color: "#65a30d" },
  { label: "Servicios", valor: 0.0, color: "#0ea5e9" },
  { label: "Vueltos", valor: 0.0, color: "#8b5cf6" },
  { label: "Propinas", valor: 0.0, color: "#9333ea" },
  { label: "Devoluciones", valor: -1681.0, color: "#ef4444" },
  { label: "Descuentos de Ley", valor: 0.0, color: "#e11d48" },
  { label: "Retenciones", valor: 33.51, color: "#0ea5e9" },
  { label: "Otros", valor: 0.0, color: "#f59e0b" },
  { label: "Total, Pagos", valor: -1621.46, color: "#7c3aed" },
];

const Kpis = () => {
  return (
    <div className="kpis-container">
      <h3 className="kpis-titulo">Montos del período</h3>
      <ul className="kpis-lista">
        {datos.map((item, index) => (
          <li key={index}>
            <span>{item.label}</span>
            <span style={{ color: item.color }}>
              {item.valor < 0 ? "- " : ""}
              ${Math.abs(item.valor).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Kpis;
