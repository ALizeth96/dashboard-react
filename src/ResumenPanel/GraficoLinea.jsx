import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { dia: "Lun", cantidad: 2, monto: 5.5 },
  { dia: "Mar", cantidad: 1, monto: 3.2 },
  { dia: "Mié", cantidad: 0, monto: 0 },
  { dia: "Jue", cantidad: 3, monto: 10.4 },
  { dia: "Vie", cantidad: 1, monto: 1.2 },
];

const GraficoLinea = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="cantidad" stroke="#8884d8" />
          <Line type="monotone" dataKey="monto" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoLinea;
