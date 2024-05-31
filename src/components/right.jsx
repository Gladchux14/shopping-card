import React from "react";
import Avatar from "./avatar";
import Boxes from "./boxes";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const boxesData = [
  { color: "#4A4D5E", size: "18px" },
  { color: "#E4E6F2", size: "15px" },
  { color: "#E4E6F2", size: "15px" },
  { color: "#E4E6F2", size: "15px" },
];

const Right = () => {
  return (
    <div className=" py-20 grid items-center  justify-center p-12 bg-[#ffff] rounded-1-2xl">
      <Avatar />
      <div className="flex items-center justify-center gap-2 ">
        <IoIosArrowBack className="text-2xl" />
        {boxesData.map((box, index) => (
          <Boxes key={index} color={box.color} size={box.size} />
        ))}
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default Right;
