import React from "react";

const ScoreBoard = (props) => {
  return (
    <div className="grid grid-cols-3 gap-5 md:10 mb-5">
      <div className="w-[100px] min-h-[60px] flex flex-col justify-center items-center rounded-md bg-[#12bfe9]">
        <p className="text-[14px]">X (You)</p>
        <p className="text-[14px] font-bold ">{props.playerScore}</p>
      </div>
      <div className="w-[100px] min-h-[60px] flex flex-col justify-center items-center rounded-md bg-[rgb(164,182,204)]">
        <p className="text-[14px]">Ties</p>
        <p className="text-[14px] font-bold ">{props.tieScore}</p>
      </div>
      <div className="w-[100px] min-h-[60px] flex flex-col justify-center items-center rounded-md bg-[#ee9806]">
        <p className="text-[14px]">O (CPU)</p>
        <p className="text-[14px] font-bold ">{props.cpuScore}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
