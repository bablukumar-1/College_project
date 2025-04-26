
import React, { useState, useRef, useEffect } from 'react';

const AutofaceAuthentygation = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Camera stream setup
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error('Camera error:', err);
        });
    }
  }, []);

  const capturePhoto = () => {
    const context = canvasRef.current.getContext('2d');
    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0);
    canvasRef.current.classList.remove('hidden');
  };

  return (
    <>
    <div className="bg-gray-100 min-h-screen" style={{ background: "linear-gradient(135deg, #74ebd5, #cbbdab)"}}>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4">Face Recognition System</h1>
          <p className="text-gray-700 mb-6">
            Welcome to the Face Recognition System. Upload a photo or use your camera to identify known individuals using advanced AI techniques.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Upload Section */}
            <div className="bg-gray-50 p-4 rounded-xl border">
              <h2 className="text-xl font-semibold mb-2">Upload Image</h2>
              <input type="file" className="w-full text-gray-700" />
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 cursor-pointer">
                Submit
              </button>
            </div>

            {/* Camera Section */}
            <div className="bg-gray-50 p-4 rounded-xl border">
              <h2 className="text-xl font-semibold mb-2">Camera</h2>
              <video ref={videoRef} autoPlay playsInline className="w-full rounded-lg border" />
              <button
                onClick={capturePhoto}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 cursor-pointer"
              >
                Capture
              </button>
              <canvas ref={canvasRef} className="hidden mt-4 rounded-lg border " style={{width: "350px", height: " 300px",}}></canvas>
            </div>

            {/* Results Section */}
            <div className="bg-gray-50 p-4 rounded-xl border">
              <h2 className="text-xl font-semibold mb-2">Recognition Results</h2>
              <div className="text-gray-600">Results will be displayed here after processing.</div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default AutofaceAuthentygation;