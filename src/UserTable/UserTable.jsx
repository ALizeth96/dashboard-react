import React from "react";
import "./UserTable.css";

const users = [
  {
    nombre: "Ana Martínez",
    estado: "Activo",
    pais: "Colombia",
    correo: "ana@email.com",
    ultimoIngreso: "2025-07-15 09:30 AM",
  },
  {
    nombre: "Carlos Pérez",
    estado: "Inactivo",
    pais: "México",
    correo: "carlos@email.com",
    ultimoIngreso: "2025-07-10 04:15 PM",
  },
  {
    nombre: "Luisa Gómez",
    estado: "Activo",
    pais: "Chile",
    correo: "luisa@email.com",
    ultimoIngreso: "2025-07-16 08:10 AM",
  },
];

const UserTable = () => {
  return (
    <div className="user-table-container">
      <h3>Usuarios</h3>
      <table className="user-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>País</th>
            <th>Correo</th>
            <th>Último ingreso</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.nombre}</td>
              <td className={u.estado === "Activo" ? "activo" : "inactivo"}>{u.estado}</td>
              <td>{u.pais}</td>
              <td>{u.correo}</td>
              <td>{u.ultimoIngreso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
