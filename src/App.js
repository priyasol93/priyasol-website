import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from './components/Services';

function App() {
  return (
    <div>
       <Router>
      <Navbar />
      <Container maxWidth="lg">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Programs />
                <Services/>
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </Container>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
