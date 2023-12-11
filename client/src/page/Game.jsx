import React, { useState } from "react";
import GameHeader from "../components/GameHeader";
import GameGrid from "../components/GameGrid";
import ScoreBoard from "../components/ScoreBoard";

const Game = (props) => {
  const [isCpuFirst, setIsCpuFirst] = useState(props.vsCpuFirstTurn);
  const [currentPlayer, setCurrentPlayer] = useState(
    isCpuFirst ? "cpu" : "player"
  );
  const [winningStrike, setWinningStike] = useState(8);
  const [board, setBoard] = useState(Array(9).fill(null));

  const gameLogic = (squares) => {
    const winningCombinations = [
      [0, 1, 2], // Top row 0
      [3, 4, 5], // Middle row 1
      [6, 7, 8], // Bottom row 2
      [0, 3, 6], // Left column 3
      [1, 4, 7], // Middle column 4
      [2, 5, 8], // Right column 5
      [0, 4, 8], // Diagonal from top-left to  bottom-right 6
      [2, 4, 6], // Diagonal from top-right to bottom-left 7
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinningStike(i);
        return squares[a];
      }
    }
    return null;
  };
  return (
    <section className="h-screen w-fit m-auto flex justify-center items-center flex-col px-5 py-5">
      <GameHeader
        currentPlayer={currentPlayer}
        gameLogic={gameLogic}
        board={board}
      />
      <GameGrid
        board={board}
        setBoard={setBoard}
        winningStrike={winningStrike}
        gameLogic={gameLogic}
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
