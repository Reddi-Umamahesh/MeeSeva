import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheelchair, faEarthAsia , faChevronDown } from "@fortawesome/free-solid-svg-icons";


const MiniNav:React.FC = () => {
  return (
    <div className="h-8 sm:h-10 bg-[#fcf9f9] w-full overflow-hidden flex gap-4 pt-1 justify-end ">
      <div className="md:flex  justify-around gap-3 pr-4 cursor-pointer hidden">
        <span className="pt-1 text-blue-950 hover:text-blue-700">
          skip to content
        </span>
        <span className="">
          <FontAwesomeIcon
            icon={faWheelchair}
            className="text-xl  flex pt-1 cursor-pointer text-blue-950 hover:text-blue-700 "
          />
        </span>
        <div className="flex gap-[1px]">
          <div className="h-8 w-10 flex items-center justify-center bg-[#3c85c6] text-slate-300 rounded-l-lg cursor-pointer hover:bg-blue-800">
            A
          </div>
          <div className="h-8 w-10 flex items-center justify-center bg-[#28A3F5] text-white rounded-r-lg cursor-pointer hover:bg-blue-400">
            A
          </div>
        </div>
        <div className="flex gap-2 pt-1">
          <span className="text-blue-800 hover:text-blue-800">
            <FontAwesomeIcon icon={faEarthAsia} className="text-xl  mr-1  " />
            Language
          </span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-lg text-gray-600 px-1 pt-[3px]"
          />
        </div>
        <div className="flex g">
          <div className="h-8 w-12 flex items-center justify-center bg-[#28A3F5] text-white rounded-l-lg cursor-pointer hover:bg-blue-600">
            A-
          </div>
          <div className="h-8 w-9 flex items-center justify-center bg-blue-300 text-white  cursor-pointer hover:bg-blue-200">
            A
          </div>
          <div className="h-8 w-12 flex items-center justify-center bg-[#28A3F5] text-white rounded-r-xl cursor-pointer hover:bg-blue-600">
            A+
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniNav