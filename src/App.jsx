import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Existing Imports
import Portfolio from "./components/Portfolio/Portfolio";
import EventPage from "./components/Portfolio/Years data/eventsPage";
import Members from "./components/Members";
import Mentors from "./components/Mentors";
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection.jsx";

// New Import for the About Page
import About from "./components/About.jsx"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              {/* This makes it appear right after the Hero when you scroll */}
              <About /> 
              <Members />
              <Mentors />
              <Portfolio />
              <FAQ />
            </>
          }
        />
        <Route path="/years/:slug" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;