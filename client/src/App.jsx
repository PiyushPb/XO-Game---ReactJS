import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/home";
import Game from "./page/Game";
import Music from "./components/Music";

function App() {
  const [vsCpuFirstTurn, setVsCpuFirstTurn] = useState(false);

  return (
    <Router>
      {/* Ensure that the Router component wraps the entire application */}
      <>
        <Routes>
          <Route
            path="/"
            element={<Home setVsCpuFirstTurn={setVsCpuFirstTurn} />}
          />
          <Route
            path="/vscpu"
            element={<Game vsCpuFirstTurn={vsCpuFirstTurn} />}
          />
        </Routes>
        <Music />
      </>
    </Router>
  );
}

export default App;
