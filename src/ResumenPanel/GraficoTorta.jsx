import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#6366f1",
  "#3b82f6",
  "#06b6d4",
  "#10b981",
  "#f97316",
  "#ef4444",
  "#14b8a6",
  "#8b5cf6",
  "#7c3aed",
];

const GraficoTorta = ({ users }) => {
  const [modo, setModo] = useState("estado"); // Por defecto Estado

  const agruparPor = (campo) => {
    const conteo = {};
    users.forEach((user) => {
      const key = user[campo];
      conteo[key] = (conteo[key] || 0) + 1;
    });
    return Object.entries(conteo).map(([name, value]) => ({ name, value }));
  };

  const data = agruparPor(modo);

  return (
    <div style={{ width: "100%", height: 330 }}>
      {/* Solo el select, sin texto encima */}
      <div style={{ marginBottom: "8px", textAlign: "right" }}>
        <select
          value={modo}
          onChange={(e) => setModo(e.target.value)}
          style={{
            padding: "6px 10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        >
          <option value="pais">Distribución por país</option>
          <option value="estado">Distribución por estado</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} usuarios`} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoTorta;

