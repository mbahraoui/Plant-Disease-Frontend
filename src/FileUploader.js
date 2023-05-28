// FileUploader.js
import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';
import Button from './Button';
import Prediction from './Prediction';
import Navbar from './Navbar';
import Footer from './Footer';

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [predictionData, setPredictionData] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      const storageRef = ref(storage, file.name);

      uploadBytes(storageRef, file)
        .then(() => getDownloadURL(storageRef))
        .then((url) => {
          sendHttpRequest(url);
        })
        .catch((error) => {
          console.error('Error:', error);
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
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <Navbar />
      <input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload} disabled={!file} />
      {predictionData && <Prediction predictionData={predictionData} />}
      <Footer />
    </div>
  );
};

export default FileUploader;
