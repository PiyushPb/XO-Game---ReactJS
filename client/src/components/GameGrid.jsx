import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { BsRecordCircleFill } from "react-icons/bs";

const GameGrid = (props) => {
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
    if (props.gameLogic(props.board) || Array.length === 8) {
      return;
    }

    if (props.board[index] || props.currentPlayer === "O") {
      return;
    }

    const newBoard = props.board.slice();
    newBoard[index] = props.isCpuFirst ? "O" : "X";

    props.setBoard(newBoard);
    props.setCurrentPlayer(props.currentPlayer === "player" ? "cpu" : "player");
  };

  const cpuTurn = () => {
    let cpuMove;

    if (props.gameLogic(props.board) || Array.length === 8) {
      return;
    }

    do {
      cpuMove = Math.floor(Math.random() * props.board.length);
    } while (props.board[cpuMove] !== null);

    const newBoard = props.board.slice();
    newBoard[cpuMove] = props.isCpuFirst ? "X" : "O";
    props.setBoard(newBoard);
    props.setCurrentPlayer(props.currentPlayer === "player" ? "cpu" : "player");
  };

  useEffect(() => {
    // console.log("Current player turn : ", currentPlayer); // Debuging
    if (props.gameLogic(props.board) || Array.length === 8) {
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
        {props.board[index] === "X" ? (
          <ImCross size={40} fill="#12bfe9" />
        ) : props.board[index] === null ? (
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
      {strike[props.winningStrike]}
    </div>
  );
};

export default GameGrid;
