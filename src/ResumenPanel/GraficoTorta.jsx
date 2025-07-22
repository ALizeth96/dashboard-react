import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#6366f1", "#3b82f6", "#06b6d4", "#10b981", "#f97316",
  "#ef4444", "#14b8a6", "#8b5cf6", "#7c3aed", "#f59e0b"
];

const GraficoTorta = ({ users }) => {
  const [modo, setModo] = useState("pais");

  const agruparPor = (campo) => {
    const conteo = {};
    users.forEach((user) => {
      const key = user[campo];
      conteo[key] = (conteo[key] || 0) + 1;
    });

    let data = Object.entries(conteo).map(([name, value]) => ({ name, value }));

    // Solo Top 10 para la torta
    if (campo === "pais") {
      data.sort((a, b) => b.value - a.value);
      data = data.slice(0, 10);
    }

    return data;
  };

  const data = agruparPor(modo);

  return (
    <div style={{ width: "100%", height: 370 }}>
      <div style={{ marginBottom: "8px", textAlign: "right" }}>
        <select
          value={modo}
          onChange={(e) => setModo(e.target.value)}
          style={{
            padding: "6px 10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        >
          <option value="pais">Distribución por país (Top 10)</option>
          <option value="estado">Distribución por estado</option>
        </select>
      </div>

      {data.length === 0 ? (
        <p style={{ color: "#ef4444", textAlign: "center" }}>
          No hay datos disponibles para la selección.
        </p>
      ) : (
        <>
          <ResponsiveContainer width="100%" height={230}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value} usuarios`} />
            </PieChart>
          </ResponsiveContainer>

          {/* Solo los 7 países más relevantes debajo */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              fontSize: "14px",
              marginTop: "10px",
              gap: "8px"
            }}
          >
            {data
              .sort((a, b) => b.value - a.value)
              .slice(0, 7)
              .map((entry, index) => (
                <span key={index} style={{ color: COLORS[index % COLORS.length] }}>
                  ● {entry.name}
                </span>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GraficoTorta;
