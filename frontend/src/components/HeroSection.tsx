import React from "react";
import Services from "./Services";
import Login from "./Login";
import Welcome from "./Welcome";
import Status from "./Status";
import TabSwitcher from "./TabSwitcher";
import Updates from "./Updates";

const HeroSection: React.FC = () => {
  return (
    <div className=" w-full py-8 px-5 flex flex-wrap gap-5 mr-10 border-b">
      <div className="lg:w-[64%] ">
        <Services />
      </div>
      <div className="lg:w-[33%] w-full">
        <Login />
      </div>
      <div className="lg:w-[65%]">
        <Welcome />
      </div>
      <div className="lg:w-[33%] w-full">
        <Status />
      </div>
      <div className="w-full min-h-[500px] bg-[#F1F5F8] mt-8 flex flex-wrap p-5 justify-around border-b">
        <div className="cust99:w-[65%] w-full min-h-[445px] sm:min-h-[410px] lg:h-full ">
          <TabSwitcher />
        </div>
        <div className="cust99:w-[30%] w-full  cust99:h-full">
    <Updates />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
