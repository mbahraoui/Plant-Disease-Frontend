import React from 'react';

const Prediction = ({ predictionData }) => {
  return (
    <div>
      <h2>Prediction: {predictionData[0].prediction}</h2>
      <p>Suggestions:</p>
      <ul>
        {predictionData[0].suggestions.split('\n\n').map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default Prediction;
