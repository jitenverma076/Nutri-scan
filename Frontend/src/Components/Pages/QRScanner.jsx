import React, { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import Navbar from '../common/Navbar';


const QRScanner = () => {
  const qrCodeScannerRef = useRef(null);
  const [scannedMessage, setScannedMessage] = useState('');

  useEffect(() => {
    // Initialize QR code scanner
    const qrScanner = new Html5QrcodeScanner(
      'qr-reader',
      {
        fps: 10, // Frames per second
        qrbox: { width: 250, height: 250 }, // QR code scanning box size
      },
      false // Disable verbose logs
    );

    qrScanner.render(
      (decodedText, decodedResult) => {
        // Handle the scanned result and update the state
        console.log('Scanned result:', decodedText);
        setScannedMessage(decodedText);
      },
      (error) => {
        // Handle errors
        console.warn('Error scanning QR Code:', error);
      }
    );

    // Cleanup on unmount
    return () => {
      qrScanner.clear();
    };
  }, []);

  return (<>
    <Navbar/>
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">QR Code Scanner</h2>
      
      {/* Div where the QR scanner will render */}
      <div
        id="qr-reader"
        className="mx-auto mb-4"
        style={{ width: '300px', height: '250px' }}
      ></div>
      
      {/* Display the scanned message */}
      {scannedMessage && (
        <div className="mt-6 text-center">
          <h3 className="text-2xl font-medium text-gray-700">Scanned Message:</h3>
          <p className="mt-2 text-xl text-gray-600">{scannedMessage}</p>
        </div>
      )}
      
      {/* Optionally, you can call CalorieSearch2 here if you need */}
      {/* <CalorieSearch2 valu={scannedMessage} /> */}
    </div>
    </>
  );
};

export default QRScanner;
