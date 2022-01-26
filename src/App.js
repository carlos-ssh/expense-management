import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Forlulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  // Define el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPegunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  // useEffect que actualiza el restante
  useEffect(() => {
    // Agrega nuevo presupuesto
    if (creargasto) {
      guardarGastos([
        ...gastos,
        gasto
      ])

      // Resta del presupuesto
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      // Resetear a false
      guardarCrearGasto(false);
    }
  }, [gasto])

  return (
    <div className="container">
      <header>
        <h1>Week Expense</h1>
        <div className="contenido-principal contenido">
          { mostrarpregunta ?
            (
              <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPegunta={actualizarPegunta}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            ) }
        </div>
      </header>
    </div>
  );
}

export default App;
