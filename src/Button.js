import React from 'react';

const Button = ({ handleUpload }) => {
  return (
    <button onClick={handleUpload} className="btn btn-success">Upload</button>
  );
};

export default Button;
