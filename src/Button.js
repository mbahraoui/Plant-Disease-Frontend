import React from 'react';

const Button = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      Upload
    </button>
  );
};

export default Button;
