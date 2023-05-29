import React from 'react';
import FileUploader from './FileUploader';
import backgroundImage from './assets/plantes-conscience.jpeg'; // Assuming you have saved the image locally in the "assets" folder

const App = () => {
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div className="container-fluid" style={appStyle}>
      <div className="row pt-5">
        <div className="col">
          <FileUploader />
        </div>
      </div>
    </div>
  );
};

export default App;
