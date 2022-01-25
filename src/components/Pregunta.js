import React, { Fragment, useState } from 'react';

const Pregunta = () => {
  // Definir el state:
  const [cantidad, guardarCantidad] = useState(0);
  const [error, definirError] = useState(false);
  // Funcion que lee el presupuesto
  const definirPresupuesto = e => {
    guardarCantidad( parseInt(e.target.value, 10) );
  }

  // Submit para definir presupuesto
  const agregarPresupuesto = e => {
    // Validar
    
    // Si se pasa la validacion
  }

  return (
    <Fragment>
      <h2>Set your Income:</h2>
      <form
        onSubmit={agregarPresupuesto}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="$500"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Set Income"
        />
      </form>
    </Fragment>
  );
}

export default Pregunta;