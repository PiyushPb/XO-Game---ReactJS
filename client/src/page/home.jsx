import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { BsRecordCircleFill } from "react-icons/bs";

const Home = (props) => {
  const [isChecked, setIsChecked] = useState(true);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
    props.setVsCpuFirstTurn(isChecked);
  };

  return (
    <div className="h-screen max-w-[400px] m-auto flex justify-center items-center flex-col px-5 py-5">
      <div className="flex justify-center items-center gap-3">
        <ImCross size={30} fill="#12bfe9" />
        <BsRecordCircleFill size={33} fill="#ee9806" />
      </div>

      <div className="bg-[#334f74] w-full h-fit rounded-xl p-3 mt-7 boxshadow group">
        <h2 className="text-center font-bold text-gray-200">
          PICK PLAYER 1'S MARK
        </h2>
        <div className="w-full p-2 bg-[#2d4255] rounded-md mt-5">
          <div
            onClick={toggleSwitch}
            className="w-full flex justify-center items-center gap-2"
          >
            <div
              className={`p-3 flex-1 flex justify-center items-center rounded-md group-hover:shadow-none ${
                !isChecked ? "bg-[#2d4255]" : "bg-[#a1bed4]"
              }`}
            >
              <ImCross
                size={30}
                fill={`${!isChecked ? "#e5e7eb" : "#2d4255"}`}
              />
            </div>
            <div
              onClick={toggleSwitch}
              className={`p-3 flex-1 flex justify-center items-center rounded-md group-hover:shadow-none ${
                !isChecked ? "bg-[#a1bed4]" : "bg-[#2d4255]"
              }`}
            >
              <BsRecordCircleFill
                size={30}
                fill={`${!isChecked ? "#2d4255" : "#a1bed4"}`}
              />
            </div>
          </div>
        </div>
        <p className="text-center text-gray-300 mt-3 font-semibold text-[14px]">
          REMEMBER X GOES ONCE
        </p>
      </div>
      <Link
        to="/vscpu"
        className="bg-[#ee990a] w-full h-fit rounded-xl p-3 mt-7 text-black buttonshadowyellow text-center"
      >
        NEW GAME (VS CPU)
      </Link>
      <Link
        onClick={() => {
          alert("Under development will be available soon!");
        }}
        className="bg-[#12bfe9] w-full h-fit rounded-xl p-3 mt-7 text-black buttonshadowblue text-center"
      >
        NEW GAME (VS PLAYER)
      </Link>
    </div>
  );
};

export default Home;
