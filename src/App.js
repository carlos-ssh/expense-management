import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Forlulario';

function App() {

  // Defile el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [ mostrarpregunta, actualizarPegunta ] = useState(true);

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
                  <Formulario />
                </div>
                <div className="one-half column">
                  2
                </div>
              </div>
            ) }
        </div>
      </header>
    </div>
  );
}

export default App;
