import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';
import Button from './Button';
import Prediction from './Prediction';

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [predictionData, setPredictionData] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      const storageRef = ref(storage, file.name);

      setLoading(true); // Start the loading indicator

      uploadBytes(storageRef, file)
        .then(() => getDownloadURL(storageRef))
        .then((url) => {
          sendHttpRequest(url);
        })
        .catch((error) => {
          console.error('Error:', error);
          setLoading(false); // Stop the loading indicator in case of an error
        });
    }
  };

  const sendHttpRequest = (url) => {
    // Send HTTP request to localhost using the URL
    // Implement your logic to fetch data from localhost
    // Example:
    fetch('http://127.0.0.1:8000/api/plant_prediction/', {
      method: 'POST',
      body: JSON.stringify({ img_url: url }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the received data from localhost
        setPredictionData(data);
        setLoading(false); // Stop the loading indicator after data is fetched
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false); // Stop the loading indicator in case of an error
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="text-center">
            <h1>PlantSheild</h1>
          </div>
          <div className="text-center">
            <input className="form-control" type="file" onChange={handleFileChange} />
          </div>
          {file && (
            <div className="text-center mt-3">
              <Button handleUpload={handleUpload} />
            </div>
          )}
          {loading && (
            <div className="text-center mt-3">
              <p>Loading...</p>
            </div>
          )}
          {predictionData && (
            <div className="mt-3">
              <Prediction predictionData={predictionData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
