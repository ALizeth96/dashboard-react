import React from "react";
import "./ResumenPanel.css";

const calcularKpis = (users) => {
  const totalVentas = users.length * 10; // Simulación: cada usuario representa $10
  const comisiones = users.length * 2;   // Simulación
  const servicios = 0;
  const vueltos = 0;
  const propinas = 0;
  const devoluciones = -50;
  const descuentos = 0;
  const retenciones = users.length * 1.5;
  const otros = 0;
  const totalPagos = totalVentas + comisiones + servicios + vueltos + propinas + devoluciones + descuentos + retenciones + otros;

  return [
    { label: "Total, Ventas", valor: totalVentas, color: "#22c55e" },
    { label: "Comisiones", valor: comisiones, color: "#65a30d" },
    { label: "Servicios", valor: servicios, color: "#0ea5e9" },
    { label: "Vueltos", valor: vueltos, color: "#8b5cf6" },
    { label: "Propinas", valor: propinas, color: "#9333ea" },
    { label: "Devoluciones", valor: devoluciones, color: "#ef4444" },
    { label: "Descuentos de Ley", valor: descuentos, color: "#e11d48" },
    { label: "Retenciones", valor: retenciones, color: "#0ea5e9" },
    { label: "Otros", valor: otros, color: "#f59e0b" },
    { label: "Total, Pagos", valor: totalPagos, color: "#7c3aed" },
  ];
};

const Kpis = ({ users }) => {
  const datos = calcularKpis(users);

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
