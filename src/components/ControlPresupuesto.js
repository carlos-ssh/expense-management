import React, { Fragment } from 'react';
import {revisarPresupuesto} from './helpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto, restante}) => (
  <Fragment>
    <div className="alert alert-primary">
      Budget: $ {presupuesto}
    </div>
    <div className={revisarPresupuesto(presupuesto, restante)}>
      Balance: $ {restante}
    </div>
  </Fragment>
);

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired
}

export default ControlPresupuesto;