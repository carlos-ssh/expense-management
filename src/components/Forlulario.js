import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, guardarNombre] = useState('');
  const [cantidad, guardarCantidad] = useState(0);

  // Cuando el usuario agrega un gasto
  const agregarGasto = e => {
    e.preventDefault();

    // Validar

    // Construir el gasto

    // Pasar el gasto al componente principal

    // Resetear el formulario
    
  }

  return (
    <form
      onSubmit={agregarGasto}
    >
      <h2>Set your data here!</h2>
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

export default Formulario;


