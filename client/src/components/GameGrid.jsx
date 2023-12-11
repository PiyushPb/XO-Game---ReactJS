import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { BsRecordCircleFill } from "react-icons/bs";

const GameGrid = (props) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winningStrike, setWinningStike] = useState(8);

  const strike = {
    0: (
      <div className="absolute top-[60px] w-[90%] bg-red-500 p-2 left-[50%] translate-x-[-50%] rounded-full"></div>
    ),
    1: (
      <div className="absolute top-[180px] w-[90%] bg-red-500 p-2 left-[50%] translate-x-[-50%] rounded-full"></div>
    ),
    2: (
      <div className="absolute top-[300px] w-[90%] bg-red-500 p-2 left-[50%] translate-x-[-50%] rounded-full"></div>
    ),
    3: (
      <div className="absolute top-[50%] translate-y-[-50%] h-[75%] bg-red-500 p-2 left-[45px] rounded-full"></div>
    ),
    4: (
      <div className="absolute top-[50%] translate-y-[-50%] h-[75%] bg-red-500 p-2 left-[163px] rounded-full"></div>
    ),
    5: (
      <div className="absolute top-[50%] translate-y-[-50%] h-[75%] bg-red-500 p-2 left-[285px] rounded-full"></div>
    ),
    7: (
      <div className="absolute top-[180px] w-[110%] bg-red-500 p-2 left-[50%] translate-x-[-50%] rounded-full rotate-[135deg]"></div>
    ),
    6: (
      <div className="absolute top-[180px] w-[110%] bg-red-500 p-2 left-[50%] translate-x-[-50%] rounded-full rotate-45"></div>
    ),
  };

  const handleButtonClick = (index) => {
    if (gameLogic(board) || Array.length === 8) {
      return;
    }

    if (board[index] || props.currentPlayer === "O") {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = props.isCpuFirst ? "O" : "X";

    setBoard(newBoard);
    props.setCurrentPlayer(props.currentPlayer === "player" ? "cpu" : "player");
  };

  const cpuTurn = () => {
    let cpuMove;

    if (gameLogic(board) || Array.length === 8) {
      return;
    }

    do {
      cpuMove = Math.floor(Math.random() * board.length);
    } while (board[cpuMove] !== null);

    const newBoard = board.slice();
    newBoard[cpuMove] = props.isCpuFirst ? "X" : "O";
    setBoard(newBoard);
    props.setCurrentPlayer(props.currentPlayer === "player" ? "cpu" : "player");
  };

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

  useEffect(() => {
    // console.log("Current player turn : ", currentPlayer); // Debuging
    if (gameLogic(board) || Array.length === 8) {
      console.log(
        (props.currentPlayer === "player" ? "CPU" : "Player") + " won the game"
      );
      return;
    }
    if (props.currentPlayer === "cpu") {
      setTimeout(() => {
        cpuTurn();
      }, 500);
    }
  }, [props.currentPlayer]);

  const renderSquare = (index) => {
    return (
      <div
        key={index}
        className="w-[100px] h-[100px] flex justify-center items-center rounded-md boxshadow bg-[#334f74] cursor-pointer"
        onClick={() => handleButtonClick(index)}
      >
        {board[index] === "X" ? (
          <ImCross size={40} fill="#12bfe9" />
        ) : board[index] === null ? (
          ""
        ) : (
          <BsRecordCircleFill size={43} fill="#ee9806" />
        )}
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-5 md:10 my-5">
        {Array.from({ length: 9 }, (_, index) => renderSquare(index))}
      </div>
      {strike[winningStrike]}
    </div>
  );
};

export default GameGrid;
