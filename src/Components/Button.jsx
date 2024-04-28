import React from "react";
import PropTypes from 'prop-types';

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button   type={type} 
    disabled={isDisabled} 
    className={`btn pos-btn ${version}`}>
      {children}
    </button>
  );
}

Button.defaulProps ={
    type:"button",
    isDisabled:false,
  version : 'primary'
}

Button.propTypes = {
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
    version: PropTypes.string

  };


export default Button;
