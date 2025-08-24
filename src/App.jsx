import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import DocumentationColor from "./pages/DocumentationColor";
import DocumentationBackground from "./pages/DocumentationBackground";
import DocumentationSize from "./pages/DocumentationSize";
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/documentation" element={<Documentation />} />
  <Route path="/documentation/color" element={<DocumentationColor />} />
  <Route path="/documentation/background" element={<DocumentationBackground />} />
  <Route path="/documentation/size" element={<DocumentationSize />} />
      </Routes>
    </Router>
  );
}

export default App;
