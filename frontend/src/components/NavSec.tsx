import { faChevronCircleRight, faChevronRight, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavSec: React.FC = () => {
  return (
    <div className="w-full flex">
      <div className="flex  items-center">
        <div className="px-6 py-4 bg-[#0097A7] text-white relative">
          Important Alerts !
          <FontAwesomeIcon
            className="absolute right-[-8px] text-[#0097A7] text-2xl"
            icon={faRightLong}
          />
        </div>
      </div>
      <div className="flex-1 bg-[#f0f0f0] flex items-center justify-center">
        <span className="text-[#FF0000] text-base font-[13px]">
          Meeseva RFP for O&M published on eProcurement protal Telangana
        </span>
      </div>
    </div>
  );
};

export default NavSec;
