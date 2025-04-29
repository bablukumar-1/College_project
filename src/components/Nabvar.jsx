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
    <nav className="sticky top-0 z-50  text-white px-6 py-4 shadow flex justify-between items-center"
      style={{
        background: 'linear-gradient(90deg, rgba(161, 163, 240, 1) 29%, rgba(29, 227, 253, 1) 56%, rgba(156, 92, 196, 1) 100%)'
      }}
    >
      {/* Left: Subharti Logo */}
      <div className="flex items-center gap-3 cursor-pointer">
        <Link to="/" >
          <img
            ref={addToRefs}
            src={subhartiLogo}
            alt="Subharti Logo"
            className="h-[50px] w-[150px] md:w-[250px]"
          />
        </Link>

      </div>


      {/* Center: Logo + Title */}
      <Link to="/" >
      <div className="flex items-center gap-3 cursor-pointer">
        
        
          <img
            ref={addToRefs}
            src={logo}
            alt="System Logo"
            className="h-[50px] w-[50px] rounded-full"
          />
        
        <span
          ref={addToRefs}
          className="hidden sm:block  text-[12px] md:text-[18px] font-semibold"
        >
          Human Detection System
        </span>
      </div>
      </Link>

      {/* Right: Desktop Navigation */}
      <div className="hidden md:block">
        <ul className="flex gap-6 text-[18px] font-semibold items-center">
          <li ref={addToRefs}><Link to="/about" className="hover:text-blue-900 hover:underline underline-offset-4 focus:text-[#090979] focus:border-b-2">About</Link></li>
          <li ref={addToRefs}><Link to="/Dashboard" className="hover:text-blue-900 hover:underline underline-offset-4 focus:text-[#090979] focus:border-b-2">Dashboard</Link></li>
          <li ref={addToRefs}><Link to="/AutofaceAuthentygation" className="hover:text-blue-900 hover:underline underline-offset-4 focus:text-[#090979] focus:border-b-2">A-f-Authentication</Link></li>
          <li ref={addToRefs}><Link to="/sigin" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded focus:text-[#090979] focus:border-b-2">Sign In</Link></li>
          <li ref={addToRefs}><Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded focus:text-[#090979] focus:border-b-2">Sign Up</Link></li>
        </ul>
      </div>

      {/* Right: Hamburger Menu Icon */}
      <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FiX className="text-white" /> : <FiMenu className="text-white" />}
      </div>

      {/* Mobile Menu (Toggle Menu Items) */}
      {menuOpen && (
        <div className="md:hidden absolute top-[80px] right-[0px] h-screen  text-white p-6 rounded shadow-lg flex flex-col gap-4 text-[18px] font-semibold items-start z-50"
          style={{
            background: 'linear-gradient(90deg, rgba(161, 163, 240, 1) 29%, rgba(29, 227, 253, 1) 56%, rgba(156, 92, 196, 1) 100%)'
          }}
        >
          <Link to="/" onClick={toggleMenu} className="hover:text-blue-900 hover:underline underline-offset-4 focus:text-[#090979] focus:border-b-2">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-blue-900 hover:underline underline-offset-4 focus:text-[#090979] focus:border-b-2">About</Link>
          <Link to="/Dashboard" onClick={toggleMenu} className="hover:text-blue-900 hover:underline underline-offset-4 focus:text-[#090979] focus:border-b-2">Dashboard</Link>
          <Link to="/AutofaceAuthentygation" onClick={toggleMenu} className="hover:text-blue-900 hover:underline underline-offset-4 focus:text-[#090979] focus:border-b-2">A-f-Authentication</Link>
          <Link to="/sigin" onClick={toggleMenu} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded focus:text-[#090979] focus:border-b-2">Sign In</Link>
          <Link to="/signup" onClick={toggleMenu} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded focus:text-[#090979] focus:border-b-2">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Nabvar;
