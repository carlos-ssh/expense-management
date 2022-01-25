import React from 'react';

const Error = ({mensaje}) => ( <p className="alert alert-danger error">Ops! it's an error. {mensaje}</p> );

export default Error;