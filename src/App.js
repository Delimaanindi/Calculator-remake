import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./pages/Landingpage/landingpage";
import Converter from "./pages/converter/converter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/converter" element={<Converter />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
