import React from "react";
import Services from "./Services";
import Login from "./Login";
import Welcome from "./Welcome";
import Status from "./Status";
import TabSwitcher from "./TabSwitcher";

const HeroSection: React.FC = () => {
  return (
    <div className=" w-full py-8 px-5 flex flex-wrap gap-5 mr-10">
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
      <div className="w-full min-h-[500px] bg-[#F1F5F8] mt-8">
        <div className="cust99:w-[65%] w-full min-h-[350px] lg:h-full ">
          <TabSwitcher />
        </div>
        <div className="">

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
