import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavSec: React.FC = () => {
  return (
    <div className="w-full flex flex-wrap">
      <div className="flex  items-center md:max-w-[175px] w-full">
        <div className="px-6 py-4 bg-[#0097A7] text-white relative w-full">
          Important Alerts !
          <FontAwesomeIcon
            className="absolute md:right-[-8px] right-0 text-[#0097A7] text-2xl"
            icon={faRightLong}
          />
        </div>
      </div>
      <div className="flex-1 bg-[#f0f0f0] flex items-center justify-center min-h-[50px]">
        <span className="text-[#FF0000] text-base font-[13px] text-center">
          Meeseva RFP for O&M published on eProcurement protal Telangana
        </span>
      </div>
    </div>
  );
};

export default NavSec;
