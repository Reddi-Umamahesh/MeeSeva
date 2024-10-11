import React from "react";
import img from "../assets/dashboard/date.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const Updates: React.FC = () => {
  return (
    <div className="min-h-[350px] w-full  cust99:h-full ">
      <div className="w-full bg-gradient-to-r from-[#6f17c7] to-[#cf61ee] h-12 py-2 rounded-t-md rounded-b-none text-center ">
        <span className="text-center text-white font-medium text-lg ">
          Latest Updates{" "}
        </span>
      </div>
      <div className="w-full cust99:h-[80%] h- pt-3 bg-white flex flex-col shadow-lg">
        <div className="px-2 mx-4 flex gap-2 pb-4 border-b-2 border-dotted ">
          {" "}
          <span>
            <img src={img} alt="6th may 2024" className=" w-20 h-14" />
          </span>
          <span className="mt-4">DOST Launched</span>
        </div>
        <div className="h-[60%] min-h-[200px]   w-full flex-grow "></div>
        <div className="min-h-[60px] bottom-0 h-[22%] w-full bg-[#f5f5f5] flex items-center justify-end px-4 border">
          <div className="flex ">
            <span className="h-10 w-12 border-2 flex items-center justify-center font-bold rounded-l-lg cursor-pointer">
              <FontAwesomeIcon
                className="font-bold text-blue-800"
                icon={faChevronUp}
                size="lg"
                style={{ strokeWidth: 2 }}
              />
            </span>
            <span className="h-10 w-12 border-2 rounded-r-lg flex items-center justify-center font-bold cursor-pointer">
              <FontAwesomeIcon
                className="font-bold text-blue-800"
                icon={faChevronDown}
                size="lg"
                style={{ strokeWidth: 2 }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
