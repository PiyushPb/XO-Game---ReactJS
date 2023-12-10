import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { BsRecordCircleFill } from "react-icons/bs";

const home = () => {
  const [isChecked, setIsChecked] = useState(0);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="h-screen max-w-[400px] m-auto flex justify-center items-center flex-col">
      <div className="flex justify-center items-center gap-3">
        <ImCross size={30} fill="#12bfe9" />
        <BsRecordCircleFill size={33} fill="#ee9806" />
      </div>

      <div className="bg-[#334f74] w-full h-fit rounded-xl p-3 mt-3">
        <h2 className="text-center font-bold text-gray-200">
          PICK PLAYER 1'S MARK
        </h2>
        <div className="w-full p-2 bg-[#2d4255] rounded-md">
          <div className="w-full flex justify-center items-center gap-2">
            <div
              className={`p-3 flex-1 flex justify-center items-center rounded-md ${
                !isChecked ? "bg-[#2d4255]" : "bg-[#a1bed4]"
              }`}
            >
              <ImCross
                size={30}
                fill={`${!isChecked ? "#e5e7eb" : "#2d4255"}`}
              />
            </div>
            <div
              className={`p-3 flex-1 flex justify-center items-center rounded-md ${
                !isChecked ? "bg-[#a1bed4]" : "bg-[#2d4255]"
              }`}
            >
              <BsRecordCircleFill size={30} fill="#a1bed4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
