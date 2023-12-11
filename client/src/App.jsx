import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/home";
import Game from "./page/Game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vscpu" element={<Game />} />
      </Routes>
    </Router>
  );
}
export default App;
