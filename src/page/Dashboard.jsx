import React from "react";
import "../StyleSection/History.css";
import human from '../DataJson/human';

const Dashboard = () => {
  const ImageClick = (imagePath) => {
    window.open(imagePath, "_blank");
  };

  return (
    <div className="main">
      <div className="components-grid">
        {human.map((student, index) => (
          <div className="component-box" key={index}>

            <div className="flex justify-center items-center gap-4">
              <img
                src={student.imagePath}
                alt={student.imagePath}
                className="h-[50px] w-[50px] rounded-full object-cover cursor-pointer border-[#4a90e2]"
                onClick={() => ImageClick(student.imagePath)}  
              />
              <div
                className={`text-[15px] p-2 font-semibold rounded-[10px] font-serif ${
                  student.role === 'Faculty'
                    ? 'text-red-500 bg-yellow-500'
                    : 'text-[#fffefe] bg-[#f70776]'
                } transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 hover:text-white`}
              >
                {student.role}
              </div>
            </div>

            <div>
              <p className="text-[20px] font-semibold">{student.name}</p>
              <p className="bg-gray-400 text-[12px] rounded">
                <strong className="ms-1">Unique ID:</strong> {student.enrollment_No}
              </p>
              <p className="text-[12px]">
                <strong className="ms-1">Department:</strong> {student.department}
              </p>
              <p className="text-[12px]">
                <strong className="ms-1">College:</strong> {student.college}
              </p>

              {student.projectRole !== 'no' && (
                <h1 className="mt-1 bg-red-500 text-white rounded cursor-pointer text-center transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 hover:text-white">
                  <strong>Project Role :</strong> {student.projectRole}
                </h1>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
