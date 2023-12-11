import React, { useEffect, useState } from "react";
import GameHeader from "../components/cpu/GameHeader";
import GameGrid from "../components/cpu/GameGrid";
import ScoreBoard from "../components/cpu/ScoreBoard";

const Game = (props) => {
  const [isCpuFirst, setIsCpuFirst] = useState(props.vsCpuFirstTurn);
  const [currentPlayer, setCurrentPlayer] = useState(
    isCpuFirst ? "cpu" : "player"
  );
  const [winningStrike, setWinningStike] = useState(8);
  const [board, setBoard] = useState(Array(9).fill(null));

  const [cpuScore, setCpuScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [tieScore, setTieScore] = useState(0);

  const gameLogic = (squares) => {
    const winningCombinations = [
      [0, 1, 2], // Top row 0
      [3, 4, 5], // Middle row 1
      [6, 7, 8], // Bottom row 2
      [0, 3, 6], // Left column 3
      [1, 4, 7], // Middle column 4
      [2, 5, 8], // Right column 5
      [0, 4, 8], // Diagonal from top-left to bottom-right 6
      [2, 4, 6], // Diagonal from top-right to bottom-left 7
    ];

    // Check for a tie
    if (squares.every((square) => square !== null)) {
      setTieScore(tieScore + 1);
      return "Tie";
    }

    // Check for a winner
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinningStike(i);
        const winner = squares[a] === "X" ? "cpu" : "player";

        if (winner === "player") {
          setCpuScore(playerScore + 1);
        } else if (winner === "cpu") {
          setPlayerScore(cpuScore + 1);
        }
        return winner;
      }
    }

    return null;
  };

  const resetBoard = () => {
    setWinningStike(null);
    setBoard(Array(9).fill(null));
    setCurrentPlayer(isCpuFirst ? "cpu" : "player");
  };

  return (
    <section className="h-screen w-fit m-auto flex justify-center items-center flex-col px-5 py-5">
      <GameHeader
        currentPlayer={currentPlayer}
        gameLogic={gameLogic}
        board={board}
        resetBoard={resetBoard}
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
      <ScoreBoard
        cpuScore={cpuScore}
        playerScore={playerScore}
        tieScore={tieScore}
      />
      {/* <p>Your opponent is thinking...</p> */}
    </section>
  );
};

export default Game;
