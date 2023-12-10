import React from "react";
import { ImCross } from "react-icons/im";
import { BsRecordCircleFill } from "react-icons/bs";

const GameHeader = () => {
  return (
    <div className="flex justify-between items-center w-full mb-5">
      <div className="flex justify-center items-center gap-3">
        <ImCross size={30} fill="#12bfe9" />
        <BsRecordCircleFill size={33} fill="#ee9806" />
      </div>
      <div></div>
      <div className="flex justify-center items-center gap-2 p-2 bg-[#334f74] rounded-md text-gray-200 font-bold boxshadow">
        <BsRecordCircleFill size={20} fill="#e5e7eb" /> TURN
      </div>
    </div>
  );
};

export default GameHeader;
