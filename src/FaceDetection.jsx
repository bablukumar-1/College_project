import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import persons from "./DataJson/human";
import camera from '../public/images/camera-cam.gif';
import Slider from "./components/Slider";

const FaceRecognition = () => {
  const videoRef = useRef(null);
  const webcamStreamRef = useRef(null); // To store the webcam stream
  const [currentMatches, setCurrentMatches] = useState([]);
  const [totalEntries, setTotalEntries] = useState(0);
  const [entryHistory, setEntryHistory] = useState({});
  const [unknownPeople, setUnknownPeople] = useState([]);
  const [unknownCount, setUnknownCount] = useState(0); // Track unknown face detections
  const [unknownImages, setUnknownImages] = useState([]); // Store unknown images with timestamp
  const [faceMatcher, setFaceMatcher] = useState(null);

  const recognizedPeopleRef = useRef(new Map());
  const unknownPeopleRef = useRef(new Map());

  useEffect(() => {
    // Clear localStorage on page load to reset history and unknown faces
    localStorage.removeItem("entryHistory");
    localStorage.removeItem("unknownFaces");

    const loadModels = async () => {
      await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      ]);
      console.log("✅ Models Loaded");

      const matcher = await createFaceMatcher();
      setFaceMatcher(matcher);

      // Only start webcam if it hasn't already been started
      if (!webcamStreamRef.current) {
        startWebcam();
      }
    };

    loadModels();

    // Reset state to initial values, since history is cleared
    setEntryHistory({});
    setUnknownPeople([]);
    setUnknownImages([]);
    setUnknownCount(0);
    setTotalEntries(0);
  }, []);

  const startWebcam = async () => {
    // If webcam is already active, do nothing
    if (webcamStreamRef.current) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        webcamStreamRef.current = stream; // Store the stream
      }
    } catch (err) {
      console.error("❌ Error accessing webcam:", err);
    }
  };

  const createFaceMatcher = async () => {
    const labeledDescriptors = [];

    for (const person of persons) {
      try {
        const imagePaths = Array.isArray(person.imagePaths) ? person.imagePaths : [person.imagePath];
        const descriptors = [];

        for (const imagePath of imagePaths) {
          const img = await faceapi.fetchImage(imagePath);
          const detection = await faceapi
            .detectSingleFace(img, new faceapi.SsdMobilenetv1Options())
            .withFaceLandmarks()
            .withFaceDescriptor();

          if (detection) descriptors.push(detection.descriptor);
        }

        if (descriptors.length > 0) {
          labeledDescriptors.push(new faceapi.LabeledFaceDescriptors(person.name, descriptors));
        }
      } catch (error) {
        console.error(`❌ Error loading images for ${person.name}:`, error);
      }
    }

    return labeledDescriptors.length > 0 ? new faceapi.FaceMatcher(labeledDescriptors, 0.6) : null;
  };

  useEffect(() => {
    if (!faceMatcher) return;
    const video = videoRef.current;
    if (!video) return;

    const detectInterval = setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.SsdMobilenetv1Options())
        .withFaceLandmarks()
        .withFaceDescriptors();

      if (detections.length === 0) {
        setCurrentMatches([]);
        return;
      }

      const currentTime = new Date().getTime();
      const matches = [];

      detections.forEach((detection) => {
        const bestMatch = faceMatcher.findBestMatch(detection.descriptor);
        const label = bestMatch.label;
        matches.push(label);

        if (label === "unknown") {
          // Capture the unknown person's image and store it with timestamp
          const canvas = faceapi.createCanvasFromMedia(video);
          const context = canvas.getContext("2d");
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const unknownImage = canvas.toDataURL(); // Save the image as base64

          // Check if the unknown face has been detected at least twice
          const unknownPerson = "Unknown";
          const currentUnknownCount = (unknownPeopleRef.current.get(unknownPerson) || 0) + 1;
          unknownPeopleRef.current.set(unknownPerson, currentUnknownCount);

          if (currentUnknownCount >= 2) {
            setUnknownCount((prev) => prev + 1); // Increment unknown entries count
            setUnknownPeople((prev) => [...prev, unknownPerson]);
            setUnknownImages((prev) => [
              ...prev,
              { image: unknownImage, timestamp: new Date().toLocaleTimeString() },
            ]); // Store the unknown image with timestamp

            // Save unknown faces data to localStorage
            const unknownFacesData = {
              unknownPeople: unknownPeopleRef.current,
              unknownImages: unknownImages,
              unknownCount: currentUnknownCount
            };
            localStorage.setItem("unknownFaces", JSON.stringify(unknownFacesData));
          }

          console.log("❌ Unknown person detected");
          return;
        }

        const lastEntry = recognizedPeopleRef.current.get(label) || 0;

        if (currentTime - lastEntry > 30000) {
          recognizedPeopleRef.current.set(label, currentTime);

          // Update entry history and store in localStorage
          const newEntryHistory = { ...entryHistory };
          if (!newEntryHistory[label]) newEntryHistory[label] = [];
          newEntryHistory[label].push(new Date().toLocaleTimeString());

          setEntryHistory(newEntryHistory);
          localStorage.setItem("entryHistory", JSON.stringify(newEntryHistory));

          setTotalEntries((prev) => prev + 1);
        }
      });

      setCurrentMatches(matches);
    }, 1000);

    return () => clearInterval(detectInterval);
  }, [faceMatcher, entryHistory]);

  return (
    <>
   <div
     style={{
       background: 'linear-gradient(90deg, rgba(161, 163, 240, 1) 29%, rgba(29, 227, 253, 1) 56%, rgba(156, 92, 196, 1) 100%)'
     }}
   >
      <div className="p-2 sm:p-4 flex flex-col items-center justify-center">
        <div className="relative w-full"> {/* full screen width */}
          <video
            ref={videoRef}
            autoPlay
            muted
            className="  w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] rounded-md shadow-2xl object-cover p-5" 
          />
          <div className="absolute top-0 left-0 w-full p-2 md:p-3 bg-[#11ED40] bg-opacity-70 text-white text-center text-lg sm:text-xl rounded-t-md">
            {currentMatches.length > 0 ? (
              currentMatches.map((match, index) => (
                <div key={index}>
                  {match === "unknown"
                    ? "❌ Unknown Person"
                    : `✅ ${match}`}
                </div>
              ))
            ) : (
              <div className="text-red-500 text-[22px] ">No one detected</div>
            )}
          </div>
          <img
            src={camera}
            alt="camera detection"
            className="absolute top-[-2px] left-[-40px]  h-[120px] sm:h-[200px] rotate-6"
          />
        </div>
      </div>
      

      <div className="flex flex-col lg:flex-row justify-evenly p-5 gap-6">
        <div className="bg-amber-400 p-6 rounded-xl shadow text-center transition-all hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 hover:text-white">
          <h3 className="text-xl font-semibold text-white">📊 Unique Entries: {totalEntries}</h3>
        </div>

        <div className="flex flex-col gap-6 p-6 shadow-2xl rounded-xl bg-amber-400 max-h-[400px] overflow-y-auto transition-all hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 hover:text-white">
          <h3 className="text-xl text-center font-semibold text-white">
            📌 Entry History
          </h3>
          <ul className="text-base font-serif space-y-2">
            {Object.entries(entryHistory).map(([name, times]) => (
              <li key={name}>
                {name}: {times.length} times
                <ul className="text-sm text-gray-600 pl-4">
                  {times.map((time, index) => (
                    <li key={index}>📍 {time}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 p-6 shadow-2xl rounded-xl bg-amber-400 max-h-[400px] overflow-y-auto transition-all hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 hover:text-white">
          <h3 className="text-xl text-center font-semibold text-white">
            📌 Unknown Faces Detected
          </h3>
          <ul className="text-base font-serif space-y-2">
            {unknownPeople.map((person, index) => (
              <li key={index}>
                {person}: {unknownCount} times
                <div>
                  {unknownImages.map((imgObj, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <img
                        src={imgObj.image}
                        alt={`Unknown Face ${idx}`}
                        className="w-20 h-20 object-cover"
                      />
                      <p>{imgObj.timestamp}</p>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <Slider/>
    </>
  );
};

export default FaceRecognition;
