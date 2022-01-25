import React, { Fragment } from 'react';

const Pregunta = () => {
  return (
    <Fragment>
      <h2>Set your Income:</h2>
      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="$500"
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