import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
  const [nombre, guardarNombre] = useState('');
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // Cuando el usuario agrega un gasto
  const agregarGasto = e => {
    e.preventDefault();

    // Validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
      guardarError(true);
      return;
    }
    guardarError(false);
    // Construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }

    // Pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);

    // Resetear el formulario
    guardarNombre('');
    guardarCantidad(0);
  }

  return (
    <form
      onSubmit={agregarGasto}
    >
      <h2>Set your data here!</h2>
      { error ? <Error mensaje="Missing to fill inputs or incorrect expense" /> : null }
      <div className="campo">
        <label className="campo">Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Example Gasoline"
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label className="campo">Expense Amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="$45"
          value={cantidad}
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="u-full-width button-primary"
        value="Add Expense"
      />
    </form>
  );
}

Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;
