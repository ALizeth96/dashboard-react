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

const procesarDatosPorPaisYFecha = (usuarios) => {
  const fechasSet = new Set();
  const paisesConteo = {};

  usuarios.forEach((u) => {
    const pais = u.pais;
    paisesConteo[pais] = (paisesConteo[pais] || 0) + 1;
  });

  const topPaises = Object.entries(paisesConteo)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([pais]) => pais);

  const dataMap = {};

  usuarios.forEach((user) => {
    const fecha = new Date(user.ultimoIngreso);
    if (isNaN(fecha)) return;

    const dia = fecha.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "short",
    });

    fechasSet.add(dia);
    if (!dataMap[dia]) dataMap[dia] = { dia };

    if (topPaises.includes(user.pais)) {
      dataMap[dia][user.pais] = (dataMap[dia][user.pais] || 0) + 1;
    }
  });

  const datosFinales = Array.from(fechasSet).map((fecha) => dataMap[fecha]);
  return datosFinales.sort(
    (a, b) => new Date(a.dia + " 2025") - new Date(b.dia + " 2025")
  );
};

const GraficoLinea = ({ users }) => {
  const data = procesarDatosPorPaisYFecha(users);
  const colores = ["#3b82f6", "#10b981", "#f97316", "#8b5cf6", "#ef4444"];
  const topPaises = Object.keys(data[0] || {}).filter((key) => key !== "dia");

  return (
    <div style={{ width: "100%", height: 300 }}>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="dia" stroke="#374151" />
            <YAxis stroke="#374151" />
            <Tooltip />
            <Legend />
            {topPaises.map((pais, index) => (
              <Line
                key={pais}
                type="monotone"
                dataKey={pais}
                stroke={colores[index % colores.length]}
                strokeWidth={2}
                name={pais}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p style={{ color: "red", textAlign: "center", paddingTop: "2rem" }}>
          No hay datos disponibles para la selección.
        </p>
      )}
    </div>
  );
};

export default GraficoLinea;

