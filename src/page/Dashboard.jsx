import React, { useState } from "react";
import "../StyleSection/History.css";
import humanData from '../DataJson/human'; // Your local JSON
import { FiEdit, FiTrash2    } from 'react-icons/fi';
const Dashboard = () => {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('studentsData');
    return savedStudents ? JSON.parse(savedStudents) : humanData;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  const ImageClick = (imagePath) => {
    window.open(imagePath, "_blank");
  };

  const handleEdit = (student) => {
    setCurrentStudent(student);
    setIsModalOpen(true);
  };

  const handleDelete = (studentToDelete) => {
    const updatedStudents = students.filter(student => student.enrollment_No !== studentToDelete.enrollment_No);
    setStudents(updatedStudents);
    localStorage.setItem('studentsData', JSON.stringify(updatedStudents));
  };

  const handleChange = (e) => {
    setCurrentStudent({
      ...currentStudent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const updatedStudents = students.map(student =>
      student.enrollment_No === currentStudent.enrollment_No ? currentStudent : student
    );
    setStudents(updatedStudents);
    localStorage.setItem('studentsData', JSON.stringify(updatedStudents));
    setIsModalOpen(false);
  };

  const handleReset = () => {
    localStorage.removeItem('studentsData');
    window.location.reload();
  };

  return (
    <div style={{
      background: 'linear-gradient(90deg, rgba(161, 163, 240, 1) 29%, rgba(29, 227, 253, 1) 56%, rgba(156, 92, 196, 1) 100%)'
    }}>
      {/* Reset Button */}
      <div className=" flex justify-around p-6">
        <div className="  " style={{}}>
          <button
            className=" cursor-pointer  p-8 text-[24px] bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleReset}
          >
            Add Candidate
          </button>
        </div>
        <div className="  " style={{}}>
          <button
            className=" cursor-pointer p-8 text-[24px] bg-yellow-500 text-white rounded hover:bg-yellow-600"
            onClick={handleReset}
          >
            Reset to Default Data
          </button>
        </div>
      </div>
      <div className="main"
        style={{
          background: 'linear-gradient(90deg, rgba(161, 163, 240, 1) 29%, rgba(29, 227, 253, 1) 56%, rgba(156, 92, 196, 1) 100%)'
        }}
      >
        {/* Grid Start */}
        <div className="components-grid">
          {students.map((student, index) => (
            <div className="component-box" key={index}>

              {/* Card Content */}
              <div className="flex justify-center items-center gap-4">
                <img
                  src={student.imagePath}
                  alt={student.imagePath}
                  className="h-[50px] w-[50px] rounded-full object-cover cursor-pointer border-[#4a90e2]"
                  onClick={() => ImageClick(student.imagePath)}
                />
                <div
                  className={`text-[15px] p-2 font-semibold rounded-[10px] font-serif ${student.role === 'Faculty'
                    ? 'text-red-500 bg-yellow-500'
                    : 'text-[#fffefe] bg-[#f70776]'
                    } transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 hover:text-white`}
                >
                  {student.role}
                </div>
              </div>

              {/* Student Details */}
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

              {/* Buttons */}
              <div className="flex  justify-center items-center gap-6 mt-4 mb-[-20px]">
                <button
                  className=" flex justify-center items-center gap-1 px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-700 transition-all"
                  onClick={() => handleEdit(student)}
                >
                 <FiEdit/>  Edit
                </button>
                <button
                  className=" flex justify-center items-center gap-1  px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-700 transition-all"
                  onClick={() => handleDelete(student)}
                >
                  <FiTrash2 className=""/> Delete
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && currentStudent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-[400px]">
              <h2 className="text-2xl mb-4 font-semibold">Edit Student</h2>

              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  value={currentStudent.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="department"
                  value={currentStudent.department}
                  onChange={handleChange}
                  placeholder="Department"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="college"
                  value={currentStudent.college}
                  onChange={handleChange}
                  placeholder="College"
                  className="border p-2 rounded"
                />
              </div>

              <div className="flex justify-end gap-2 mt-5">
                <button
                  className="px-4 py-2 bg-gray-400 rounded text-white hover:bg-gray-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-green-500 rounded text-white hover:bg-green-700"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;
