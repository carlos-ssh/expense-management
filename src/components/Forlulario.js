import React, { useState } from 'react';

const Formulario = () => {
  return (
    <form>
      <h2>Set your data here!</h2>
      <div className="campo">
        <label className="campo">Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Example Gasoline"
        />
      </div>
      <div className="campo">
        <label className="campo">Expense Amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="$45"
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


