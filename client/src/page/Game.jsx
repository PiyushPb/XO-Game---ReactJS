import React from "react";
import GameHeader from "../components/GameHeader";
import GameGrid from "../components/GameGrid";
import ScoreBoard from "../components/ScoreBoard";

const Game = () => {
  return (
    <section className="h-screen w-fit m-auto flex justify-center items-center flex-col px-5 py-5">
      <GameHeader />
      <GameGrid />
      <ScoreBoard />
      <p>Your opponent is thinking...</p>
    </section>
  );
};

export default Game;
