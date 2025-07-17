import GraficoTorta from "./GraficoTorta";
import Kpis from "./Kpis";
import GraficoLinea from "./GraficoLinea";
import UserTable from "../UserTable/UserTable.jsx";

import "./ResumenPanel.css";

const ResumenPanel = () => {
  return (
    <>
      <div className="resumen-panel-grid">
        <div className="card-panel grafico-container">
          <GraficoTorta />
        </div>
        <div className="card-panel resumen-container">
          <Kpis />
        </div>
        <div className="card-panel pagos-container">
          <h3>Total Pagos</h3>
          <div className="total-pagos">$ 19,14</div>
          <div className="total-pagos-label">
            Valor de los pagos confirmados en el período seleccionado.
          </div>
          <div className="actualizado-label">
            Información actualizada al 30-05-2022
          </div>
        </div>
      </div>

      <div className="graficos-tabla-wrapper">
        <div className="grafico-linea-wrapper">
          <GraficoLinea />
        </div>
        <div className="user-table-wrapper">
          <UserTable />
        </div>
      </div>
    </>
  );
};

export default ResumenPanel;
