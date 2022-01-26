import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPegunta
  }) => {
  // Definir el state:
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);
  // Funcion que lee el presupuesto
  const definirPresupuesto = e => {
    guardarCantidad( parseInt(e.target.value, 10) );
  }

  // Submit para definir presupuesto
  const agregarPresupuesto = e => {
    // Validar
    if (cantidad < 1 || isNaN( cantidad )) {
      guardarError(true);
      return;
    }
    // Si se pasa la validacion
    guardarError(false);
    guardarPresupuesto( cantidad );
    guardarRestante( cantidad );
    actualizarPegunta(false);
  }

  return (
    <Fragment>
      <h2>Set your Income:</h2>

      { error ? <Error mensaje="Incorrect income, please set a number or bigger than 1" /> : null }

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

Pregunta.propTypes = {
  guardarPresupuesto:   PropTypes.func.isRequired,
  guardarRestante:      PropTypes.func.isRequired,
  actualizarPegunta:    PropTypes.func.isRequired
}

export default Pregunta;