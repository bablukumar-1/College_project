import React from "react";
import logo from "../../public/images/logo.png";
import { FaInstagram, FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import ObjectHuman from "../DataJson/human";

const Footer = () => {
  return (
    <footer className="footer"
    style={{
        background: 'linear-gradient(90deg, rgba(161, 163, 240, 1) 29%, rgba(29, 227, 253, 1) 56%, rgba(156, 92, 196, 1) 100%)'
      }}
    >
      
      {/* Main Content */}
      <div className="footer-container grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 p-4 border-t-2 text-gray-700 text-sm">
        {/* Left Column */}
        <div className="footer-column ms-[50px] md:ms-0">
          <p className="footer-title font-semibold text-lg mb-2 flex items-center gap-2">
            <img src={logo} alt="logo" className="h-[50px] w-[50px] rounded-full" />
            <span className="text-white underline underline-offset-8 text-[20px] hover:text-blue-400 cursor-pointer">Code-Titan</span>
          </p>
          <ul className="p-2">
            <p className="text-red-500 font-serif text-[18px]">Developed by:</p>
            {ObjectHuman.map((item, index) => (
              index < 5 && (
                <div key={index} className="flex items-center m-[2px]">
                  <img src={item.imagePath} className="h-[30px] w-[30px] rounded-full" alt="" />
                  <li className="text-black m-[3px]">
                    <span className="font-semibold text-[#d48841]">{item.projectRole}-</span>
                    <span className="bg-gray-400 text-[10px] p-1 m-1 text-white">{item.name}</span>
                  </li>
                </div>
              )
            ))}
          </ul>
        </div>

        {/* Center Column */}
        <div className="footer-column text-center">
          <p className="footer-title font-semibold text-lg mb-2 text-white underline underline-offset-8 hover:text-blue-400 cursor-pointer">
            Follow Us
          </p>
          <div className="footer-links flex flex-col gap-2 justify-center items-center  mt-4">
            <a href="https://www.instagram.com/ji_sarkar_ji_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaInstagram className="text-pink-500 h-[30px] w-[30px]" />
              <span className="text-[14px] text-blue-500 font-serif hover:underline hover:text-red-500">Instagram</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100067181717204&ref=ig_profile_ac" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaFacebook className="text-blue-600 h-[30px] w-[30px]" />
              <span className="text-[14px] text-blue-500 font-serif hover:underline hover:text-red-500">Facebook</span>
            </a>
            <a href="https://x.com/sarkar36210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaTwitter className="text-blue-400 h-[30px] w-[30px]" />
              <span className="text-[14px] text-blue-500 font-serif hover:underline hover:text-red-500">Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/bablu-kumar-5a48b7282/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaLinkedin className="text-blue-700 h-[30px] w-[30px]" />
              <span className="text-[14px] text-blue-500 font-serif hover:underline hover:text-red-500">LinkedIn</span>
            </a>
            <a href="https://github.com/bablukumar-1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaGithub className="text-black h-[30px] w-[30px]" />
              <span className="text-[14px] text-blue-500 font-serif hover:underline hover:text-red-500">GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="ms-[50px] md:ms-0">
          <p className="footer-title font-semibold text-lg mb-2 text-white underline underline-offset-8 hover:text-blue-400 cursor-pointer">
            Project Details
          </p>
          <div className="mt-4 text-[14px] font-serif space-y-1">
            <p>Human Detection & Counting System</p>
            <p>Powered by Face Recognition</p>
            <p>Open-source Project</p>
            <p>SVSU • 2025</p>
            <p>Faculty of Engineering & Technology.</p>
            <p>Swami Vivekanand Subharti University.</p>
            <p>Meerut, Uttar Pradesh-250005 (India)</p>
          </div>

          <p className="mt-2 text-[12px] font-serif">
            <span className="font-semibold">Support:</span>{" "}
            <a
              href="https://www.linkedin.com/in/bablu-kumar-5a48b7282/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline underline-offset-4 hover:text-white"
            >
              Contact Here...
            </a>
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom text-center py-2 bg-gradient-to-bl from-[#52ffe7] to-[#e2ff19] mt-4 transition-all duration-300 group hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500">
        <p className="text-[10px] text-gray-500 group-hover:text-green-400">
          © 2025 <span className="font-semibold text-gray-700 group-hover:text-white">Code-Titan</span>. Privacy Policy. <br />
          This project is open-source under the <span className="italic group-hover:text-white">Faculty of Engineering & Technology, Meerut (SVSU)</span> License.
        </p>
        <p className="mt-1 text-[10px] group-hover:text-green-400">
          <span className="font-semibold">Contact:</span>{" "}
          <a
            href="https://www.linkedin.com/in/bablu-kumar-5a48b7282/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4 hover:text-white"
          >
            click here ...
          </a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
