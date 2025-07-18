import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Función para agrupar usuarios por día (usando fecha de ingreso)
const procesarDatos = (usuarios) => {
  const resumen = {};

  usuarios.forEach((user) => {
    const fecha = new Date(user.ultimoIngreso);
    const dia = fecha.toLocaleDateString("es-ES", { weekday: "short" });

    if (!resumen[dia]) {
      resumen[dia] = { dia, cantidad: 0, monto: 0 };
    }

    resumen[dia].cantidad += 1;
    resumen[dia].monto += Math.random() * 10 + 1; // Monto ficticio para demo
  });

  return Object.values(resumen);
};

const GraficoLinea = ({ users }) => {
  const data = procesarDatos(users);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="dia" stroke="#374151" />
          <YAxis stroke="#374151" />
          <Tooltip formatter={(value, name) => (name === "monto" ? `$${value.toFixed(2)}` : value)} />
          <Legend />
          <Line
            type="monotone"
            dataKey="cantidad"
            stroke="#3b82f6"
            strokeWidth={2}
            name="Usuarios"
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="monto"
            stroke="#10b981"
            strokeWidth={2}
            name="Monto"
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoLinea;

