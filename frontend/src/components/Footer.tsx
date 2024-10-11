import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-4">
      <div className="lg:w-[70%] w-full">
        <div className="flex w-full items-center justify-center flex-wrap px-4 py-2">
          {[
            "Discussion Form",
            "Website Policy",
            "Privacy Policy/Notifications",
            "Terms & Conditions",
            "Disclaimer",
            "Accessibility",
            "FAQ's",
            "Sitemap",
          ].map((item) => (
            <span
              key={item}
              className="hover:text-blue-800 cursor-pointer py-1 mx-2"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-[#1F233C] text-white min-h-24 flex flex-col justify-center items-start gap-2 py-4 w-full">
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-2 px-4 text-left">
          <span className="text-[12px] cust49:text-[15px]">
            All Rights Reserved with Commissioner,
            <span className="text-blue-400 font-medium cursor-pointer lg:text-lg ml-1">
              Electronic Services Delivery
            </span>
            , ITE & C Department, Government of Telangana.
          </span>
          <span className="text-[12px] cust49:text-[15px]">
            Version 2.5.1, Last Updated on: 23-07-2021
          </span>
        </div>
        <div className="w-full lg:w-[50%] flex flex-col md:flex-row justify-start items-center px-3 text-left text-[12px] cust49:text-[15px] pb-4">
          <span className="w-full md:w-[50%]">
            Visitors Count Since 1st Jan 2019: 000064981425
          </span>
          <span>Best viewed in Chrome 1366x768 resolution.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
