import React from "react";
import "./UserTable.css";

const UserTable = ({ users }) => {
  return (
    <div className="tabla-wrapper">
      {users.length === 0 ? (
        <p className="mensaje-vacio">No hay usuarios para mostrar</p>
      ) : (
        <table className="tabla-usuarios">
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
            {users.map((user, index) => (
              <tr key={`${user.correo}-${index}`} className={user.estado.toLowerCase()}>
                <td>{user.nombre}</td>
                <td>
                  <span
                    className={`estado-indicador ${
                      user.estado.toLowerCase() === "activo" ? "verde" : "rojo"
                    }`}
                    title={user.estado}
                  ></span>{" "}
                  {user.estado}
                </td>
                <td>{user.pais}</td>
                <td>{user.correo}</td>
                <td>{user.ultimoIngreso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;
