import React from "react";
import "./UserTable.css";

const UserTable = ({ users }) => {
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
          {users.length > 0 ? (
            users.map((u, i) => (
              <tr key={i}>
                <td>{u.nombre}</td>
                <td className={u.estado === "Activo" ? "activo" : "inactivo"}>{u.estado}</td>
                <td>{u.pais}</td>
                <td>{u.correo}</td>
                <td>{u.ultimoIngreso}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "10px" }}>
                No se encontraron usuarios.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
