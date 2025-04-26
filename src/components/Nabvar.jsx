import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../public/images/logo.png';
import subhartiLogo from '../../public/images/subharti.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FiMenu, FiX } from 'react-icons/fi';

const Nabvar = () => {
  const navItemsRef = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-bl from-[#8b8bd7] to-[#c4d0f2] text-white px-6 py-4 shadow flex justify-between items-center">
      {/* Left: Subharti Logo */}
      <div className="flex items-center gap-3 cursor-pointer">
        <img
          ref={addToRefs}
          src={subhartiLogo}
          alt="Subharti Logo"
          className="h-[50px] w-[150px] md:w-[250px]"
        />
      </div>

      {/* Center: Logo + Title */}
      <div className="flex items-center gap-3 cursor-pointer">
        <img
          ref={addToRefs}
          src={logo}
          alt="System Logo"
          className="h-[50px] w-[50px] rounded-full"
        />
        <span
          ref={addToRefs}
          className="hidden sm:block md:block text-[24px] font-bold"
        >
          Human Detection System
        </span>
      </div>

      {/* Right: Desktop Navigation */}
      <div className="hidden md:block">
        <ul className="flex gap-6 text-[18px] font-semibold items-center">
          <li ref={addToRefs}><Link to="/" className="hover:text-blue-900 hover:underline underline-offset-4">Home</Link></li>
          <li ref={addToRefs}><Link to="/about" className="hover:text-blue-900 hover:underline underline-offset-4">About</Link></li>
          <li ref={addToRefs}><Link to="/Dashboard" className="hover:text-blue-900 hover:underline underline-offset-4">Dashboard</Link></li>
          <li ref={addToRefs}><Link to="/AutofaceAuthentygation" className="hover:text-blue-900 hover:underline underline-offset-4">A-f-Authentication</Link></li>
          <li ref={addToRefs}><Link to="/sigin" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Sign In</Link></li>
          <li ref={addToRefs}><Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Sign Up</Link></li>
        </ul>
      </div>

      {/* Right: Hamburger Menu Icon */}
      <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FiX className="text-white" /> : <FiMenu className="text-white" />}
      </div>

      {/* Mobile Menu (Toggle Menu Items) */}
      {menuOpen && (
        <div className="absolute top-[80px] right-[0px] h-screen bg-gradient-to-bl from-[#8b8bd7] to-[#c4d0f2] text-white p-6 rounded shadow-lg flex flex-col gap-4 text-[18px] font-semibold items-start z-50">
          <Link to="/" onClick={toggleMenu} className="hover:text-blue-900 hover:underline underline-offset-4">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-blue-900 hover:underline underline-offset-4">About</Link>
          <Link to="/Dashboard" onClick={toggleMenu} className="hover:text-blue-900 hover:underline underline-offset-4">Dashboard</Link>
          <Link to="/AutofaceAuthentygation" onClick={toggleMenu} className="hover:text-blue-900 hover:underline underline-offset-4">A-f-Authentication</Link>
          <Link to="/sigin" onClick={toggleMenu} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Sign In</Link>
          <Link to="/signup" onClick={toggleMenu} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Nabvar;
