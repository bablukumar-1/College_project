import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nabvar from "./components/Nabvar";
import Home from "./page/Home";
import AutofaceAuthentygation from "./page/AutofaceAuthentygation";
import About from "./page/About";
import Footer from "./components/Footer";
import Dashboard from "./page/Dashboard";
import Sigin from "./components/Sigin";
import Signup from "./components/Signup"

function App() {
  return (
    <>
      <Router>
      <Nabvar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/AutofaceAuthentygation" element={<AutofaceAuthentygation />} />
          <Route path="/sigin" element={<Sigin/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;