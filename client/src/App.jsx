import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/home";
import Game from "./page/Game";
import Music from "./components/Music";
import Signup from "./page/Signup";
import Login from "./page/Login";

function App() {
  const [vsCpuFirstTurn, setVsCpuFirstTurn] = useState(false);

  const [isUserLoggedin, setIsUserLoggedin] = useState(false);

  const [isDialogOpen, setDialogOpen] = useState(true);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setVsCpuFirstTurn={setVsCpuFirstTurn}
                isUserLoggedin={isUserLoggedin}
                setIsUserLoggedin={setIsUserLoggedin}
                setDialogOpen={setDialogOpen}
              />
            }
          />
          <Route
            path="/vscpu"
            element={<Game vsCpuFirstTurn={vsCpuFirstTurn} />}
          />
        </Routes>
        <Music />
        <Signup isDialogOpen={isDialogOpen} setDialogOpen={setDialogOpen} />
        <Login
          isLoginDialogOpen={isLoginDialogOpen}
          setIsLoginDialogOpen={setIsLoginDialogOpen}
        />
      </>
    </Router>
  );
}

export default App;
