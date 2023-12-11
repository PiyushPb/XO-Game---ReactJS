import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { BsRecordCircleFill } from "react-icons/bs";

const GameHeader = (props) => {
  const [currentMove, setCurrentMove] = useState(1);
  const [win, setWin] = useState("");

  useEffect(() => {
    setCurrentMove((prevMove) => (prevMove === 1 ? 0 : 1));
  }, [props.currentPlayer]);

  useEffect(() => {
    // console.log("Current player turn : ", currentPlayer); // Debuging
    if (props.gameLogic(props.board)) {
      // console.log(
      //   (props.currentPlayer === "player" ? "CPU" : "Player") + " won the game"
      // );
      setWin(props.currentPlayer);
      return;
    }
  }, [props.currentPlayer]);

  useEffect(() => {
    console.log("Winner: ", win);
  }, [win]);

  return (
    <div className="flex justify-between items-center w-full mb-5">
      <div className="flex justify-center items-center gap-3">
        <ImCross size={30} fill="#12bfe9" />
        <BsRecordCircleFill size={33} fill="#ee9806" />
      </div>
      <div></div>
      <div className="flex justify-center items-center gap-2 p-2 bg-[#334f74] rounded-md text-gray-200 font-bold boxshadow">
        {currentMove === 0 ? (
          <BsRecordCircleFill size={20} fill="#e5e7eb" />
        ) : (
          <ImCross size={20} fill="#e5e7eb" />
        )}
        TURN
      </div>
    </div>
  );
};

export default GameHeader;
