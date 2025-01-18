
// import React, { useEffect, useRef, useState } from "react";
// import { Html5QrcodeScanner } from "html5-qrcode";
// import Navbar from "../common/Navbar";
// import DishTable from "./DishTable";

// const QRScanner = () => {
//   const qrCodeScannerRef = useRef(null);
//   const [scannedMessage, setScannedMessage] = useState(null);

//   useEffect(() => {
//     // Initialize QR code scanner
//     const qrScanner = new Html5QrcodeScanner(
//       "qr-reader",
//       {
//         fps: 10, // Frames per second
//         qrbox: { width: 250, height: 250 }, // QR code scanning box size
//       },
//       false // Disable verbose logs
//     );

//     qrScanner.render(
//       (decodedText, decodedResult) => {
//         try {
//           // Parse the scanned data as JSON
//           const parsedData = JSON.parse(decodedText);
//           console.log("Scanned and parsed data:", parsedData);
//           setScannedMessage(parsedData);
//         } catch (error) {
//           console.error("Invalid QR Code data:", error);
//         }
//       },
//       (error) => {
//         console.warn("Error scanning QR Code:", error);
//       }
//     );

//     // Cleanup on unmount
//     return () => {
//       qrScanner.clear();
//     };
//   }, []);

//   // Function to update the quantity
//   const updateQuantity = (id, delta) => {
//     if (scannedMessage) {
//       const updatedIngredients = scannedMessage.ingredients.map((ingredient) =>
//         ingredient._id === id
//           ? { ...ingredient, quantity: Math.max(0, ingredient.quantity + delta) }
//           : ingredient
//       );
//       setScannedMessage({ ...scannedMessage, ingredients: updatedIngredients });
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
//           QR Code Scanner
//         </h2>

//         {/* Div where the QR scanner will render */}
//         <div
//           id="qr-reader"
//           className="mx-auto mb-4"
//           style={{ width: "300px", height: "250px" }}
//         ></div>

//         {/* Display the scanned DishTable if the data is valid */}
//         {scannedMessage ? (
//           <div className="mt-6">
//             <DishTable data={scannedMessage} updateQuantity={updateQuantity} />
//           </div>
//         ) : (
//           <div className="text-center text-gray-500">Scan a QR Code to see the data</div>
//         )}
//       </div>
//     </>
//   );
// };

// export default QRScanner;
import React, { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import Navbar from "../common/Navbar";
import DishTable from "./DishTable";

const QRScanner = () => {
  const qrCodeScannerRef = useRef(null);
  const [scannedMessage, setScannedMessage] = useState(null);

  useEffect(() => {
    // Initialize QR code scanner
    const qrScanner = new Html5QrcodeScanner(
      "qr-reader",
      {
        fps: 10, // Frames per second
        qrbox: { width: 250, height: 250 }, // QR code scanning box size
      },
      false // Disable verbose logs
    );

    qrScanner.render(
      (decodedText, decodedResult) => {
        try {
          // Parse the scanned data as JSON
          const parsedData = JSON.parse(decodedText);
          console.log("Scanned and parsed data:", parsedData);
          setScannedMessage(parsedData);
        } catch (error) {
          console.error("Invalid QR Code data:", error);
        }
      },
      (error) => {
        console.warn("Error scanning QR Code:", error);
      }
    );

    // Cleanup on unmount
    return () => {
      qrScanner.clear();
    };
  }, []);

  // Function to update the quantity
  const updateQuantity = (id, delta) => {
    if (scannedMessage) {
      const updatedIngredients = scannedMessage.ingredients.map((ingredient) =>
        ingredient._id === id
          ? { ...ingredient, quantity: Math.max(0, ingredient.quantity + delta) }
          : ingredient
      );
      setScannedMessage({ ...scannedMessage, ingredients: updatedIngredients });
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          QR Code Scanner
        </h2>

        {/* Div where the QR scanner will render */}
        <div
          id="qr-reader"
          className="mx-auto mb-4"
          style={{ width: "100%", maxWidth: "300px", height: "auto" }}
        ></div>

        {/* Display the scanned DishTable if the data is valid */}
        {scannedMessage ? (
          <div className="mt-6">
            <DishTable data={scannedMessage} updateQuantity={updateQuantity} />
          </div>
        ) : (
          <div className="text-center text-gray-500">Scan a QR Code to see the data</div>
        )}
      </div>
    </>
  );
};

export default QRScanner;
