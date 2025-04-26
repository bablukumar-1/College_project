import React from 'react'

import ObjectHuman from '../DataJson/human'
import { FaUsers } from "react-icons/fa";
import  ImageSlider from '../components/Slider';
import information from '../DataJson/AboutContext';
import DeveloperBanner from '../components/Developer';
function About() {
  return (
    <>
      <div className="bg-gradient-to-bl from-[#07DFF7] to-[#08FDC7] min-h-screen">
        <div className='mt-[-60px]'>
          <ImageSlider />
          {information.map((data, index) => (
            <div className="p-4" key={index}>
              <h2 className="text-[20px] font-bold cursor-grab">{data.title}</h2>
              <ul className="ml-20 mt-2 p-2 border-l-4 border-yellow-500 bg-white">
                {data.content.map((content, index) => (
                  <li key={index} className="leading-tight text-[16px] text-red-400 font-serif m-1">
                    <p className="ms-1 text-black">{content.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Developer Section */}
          <div className="flex items-center gap-4 p-4 text-center md:text-[32px] text-[20px] font-semibold bg-[#FF930E] m-8 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 hover:text-white">
            <FaUsers size={40} className="text-blue-500" />
            <h1>The Creators of the Human Detection System <strong className="text-white">( Team of Engineers and Innovators. )</strong></h1>
          </div>

          {/* Developers Cards */}
          {/* <div className="components-grid">
            {ObjectHuman.map((student, index) => (
              <div key={index}>
                {
                  index < 5 &&
                  <div className="component-box" key={index}>

                    <div className="flex justify-center items-center gap-4">
                      <img
                        src={student.imagePath}
                        alt={student.imagePath}
                        className="h-[50px] w-[50px] rounded-full object-cover cursor-pointer border-[#4a90e2]"
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
                }
              </div>
            ))}
          </div> */}
         <DeveloperBanner/>
        </div>
      </div>

    </>
  )
}

export default About
