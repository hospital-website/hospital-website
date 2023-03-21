import { Route, Routes } from "react-router-dom";

import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Doctors from "./Pages/Doctors/Doctors";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import React from "react";
import Srevices from "./Pages/Services/Srevices";

// import News from "./Pages/News/News";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/services" element={<Srevices />} />
        {/* <Route path="/news" element={<News />} /> */}
      </Routes>

      <Footer />
    </>
  );
};

export default App;
