import React, { useState } from "react";
import GameHeader from "../components/GameHeader";
import GameGrid from "../components/GameGrid";
import ScoreBoard from "../components/ScoreBoard";

const Game = () => {
  const [isCpuFirst, setIsCpuFirst] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(
    isCpuFirst ? "cpu" : "player"
  );
  return (
    <section className="h-screen w-fit m-auto flex justify-center items-center flex-col px-5 py-5">
      <GameHeader currentPlayer={currentPlayer} />
      <GameGrid
        isCpuFirst={isCpuFirst}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
      />
      <ScoreBoard />
      <p>Your opponent is thinking...</p>
    </section>
  );
};

export default Game;
