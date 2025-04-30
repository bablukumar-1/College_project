import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from '../../public/images/logo.png';
import subhartiLogo from '../../public/images/subharti.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FiMenu, FiX, FiChevronDown, FiChevronUp, FiMoon, FiSun } from 'react-icons/fi';

const Nabvar = () => {
  const navItemsRef = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [darkModeColor1, setDarkModeColor1] = useState('rgba(161, 163, 240, 1)');
  const [darkModeColor2, setDarkModeColor2] = useState(' rgba(29, 227, 253, 1)');
  const [darkModeColor3, setDarkModeColor3] = useState('rgba(156, 92, 196, 1)');

  navItemsRef.current = [];

  const addToRefs = (el) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.from(navItemsRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, []);

  useEffect(() => {
    if (darkMode) {
      setDarkModeColor1('black');
      setDarkModeColor2('black');
      setDarkModeColor3('black');
    } else {
      setDarkModeColor1('rgba(161, 163, 240, 1)');
      setDarkModeColor2(' rgba(29, 227, 253, 1)');
      setDarkModeColor3('rgba(156, 92, 196, 1)');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (showDropdown) setShowDropdown(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showDropdown]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav
      className={`sticky top-0 z-50 text-white px-6 py-4 shadow flex justify-between items-center`}
      style={{
        background: `linear-gradient(90deg,${darkModeColor1}  29%,${darkModeColor2} 56%, ${darkModeColor3} 100%)`
      }}
    >
      {/* Left: Subharti Logo */}
      <div className="flex items-center gap-3 cursor-pointer">
        <Link to="/">
          <img
            ref={addToRefs}
            src={subhartiLogo}
            alt="Subharti Logo"
            className="h-[50px] w-[150px] md:w-[250px]"
          />
        </Link>
      </div>

      {/* Center: Logo + Title */}
      <Link to="/">
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            ref={addToRefs}
            src={logo}
            alt="System Logo"
            className="h-[50px] w-[50px] rounded-full"
          />
          <span
            ref={addToRefs}
            className="hidden sm:block text-[12px] md:text-[18px] font-semibold"
          >
            Human Detection System
          </span>
        </div>
      </Link>

      {/* Right: Desktop Navigation */}
      <div className="hidden md:flex gap-6 items-center text-[18px] font-semibold">
        <Link ref={addToRefs} to="/about" className="hover:text-blue-900 hover:underline underline-offset-4">
          About
        </Link>

        {/* Detection Hub Dropdown */}
       <div
         className="relative"
         ref={addToRefs}
         onMouseEnter={() => setShowDropdown(true)}
       >
         <div className="flex items-center gap-1 hover:text-blue-900 hover:underline underline-offset-4 cursor-pointer">
           Detection Hub {showDropdown ? <FiChevronUp className="mt-1" /> : <FiChevronDown className="mt-1" />}
         </div>
       
         {showDropdown && (
           <div
             className="absolute left-0 top-[30px] flex flex-col bg-white text-black mt-2 rounded shadow-lg min-w-[200px] z-50"
             onMouseLeave={() => setShowDropdown(false)} // only leave when leaving dropdown
           >
             <Link
               to="/Dashboard"
               onClick={() => setShowDropdown(false)} // close on click
               className="px-4 py-2 hover:bg-blue-100 hover:text-blue-800 border-b border-gray-200"
             >
               Dashboard
             </Link>
             <Link
               to="/AutofaceAuthentygation"
               onClick={() => setShowDropdown(false)} // close on click
               className="px-4 py-2 hover:bg-blue-100 hover:text-blue-800"
             >
               A-f-Authentication
             </Link>
           </div>
         )}
       </div>


        <Link ref={addToRefs} to="/sigin" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
          Sign In
        </Link>

        <Link ref={addToRefs} to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
          Sign Up
        </Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="text-white text-[30px] hover:text-yellow-300"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FiMoon /> : <FiSun />}
        </button>
      </div>

      {/* Dark Mode Toggle (Mobile) */}
      <button
        onClick={toggleDarkMode}
        className="text-white text-[30px] hover:text-yellow-300 block md:hidden"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <FiMoon /> : <FiSun />}
      </button>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FiX className="text-white" /> : <FiMenu className="text-white" />}
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-[80px] right-0 h-screen text-white p-6 rounded shadow-lg flex flex-col gap-4 text-[18px] font-semibold items-start z-50"
          style={{
            background: `linear-gradient(90deg,${darkModeColor1}  29%,${darkModeColor2} 56%, ${darkModeColor3} 100%)`
          }}
        >
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/Dashboard" onClick={toggleMenu}>Dashboard</Link>
          <Link to="/AutofaceAuthentygation" onClick={toggleMenu}>A-f-Authentication</Link>
          <Link to="/sigin" onClick={toggleMenu}>Sign In</Link>
          <Link to="/signup" onClick={toggleMenu}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Nabvar;
