import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmarkDome,
  faGopuram,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  ChartNetwork,
  Droplet,
  FileText,
  NotebookPen,
  Radio,
  
  Shield,
  Truck,
  Wallet,
  Wheat,
  Zap,
} from "lucide-react";
const Services: React.FC = () => {
  const numbers = [];

  for (let i = 1; i <= 12; i++) {
    numbers.push(i);
  }
 const items = [
   {
     title: "RTA",
     color: "bg-[linear-gradient(45deg,#ef9a9a_0%,#e53935_100%)]",
     icon: <Truck size={48} />,
   },
   {
     title: "GHMC",
     color: "bg-[linear-gradient(315deg,#9ebd13db_0%,#3fd199ad_100%)]",
     icon: <FontAwesomeIcon icon={faLandmarkDome} />,
   },
   {
     title: "TGSPDCL",
     color: "bg-[linear-gradient(45deg,#1CB5E0db_0%,#2639e7db_100%)]",
     icon: <Zap size={48} />,
   },
   {
     title: "Police",
     color: "bg-[linear-gradient(45deg,#ff8f00ba_0%,#ffe082_100%)]",
     icon: <Shield size={48} />,
   },
   {
     title: "Registration",
     color: "bg-[linear-gradient(45deg,#5336d18f_0%,#8aaafd_100%)]",
     icon: <NotebookPen size={48} />,
   },
   {
     title: "Revenue",
     color: "bg-[linear-gradient(45deg,#569df5db_0%,#00d4ffdb_100%)]",
     icon: <ChartNetwork size={48} />,
   },
   {
     title: "TWallet",
     color: "bg-[linear-gradient(315deg,#9ebd13db_0%,#3fd199ad_100%)]",
     icon: <Wallet size={48} />,
   },
   {
     title: "HMWSSB",
     color: "bg-[linear-gradient(45deg,#ef9a9a_0%,#e53935_100%)]",
     icon: <Droplet size={48} />,
   },
   {
     title: "Endowment",
     color: "bg-[linear-gradient(45deg,#1CB5E0db_0%,#2639e7db_100%)]",
     icon: <FontAwesomeIcon icon={faGopuram} />,
   },
   {
     title: "Other Payments",
     color: "bg-[linear-gradient(45deg,#ff8f00ba_0%,#ffe082_100%)]",
     icon: <FileText size={48} />,
   },
   {
     title: "Agriculture",
     color: "bg-[linear-gradient(45deg,#5336d18f_0%,#8aaafd_100%)]",
     icon: <Wheat size={48} />,
   },
   {
     title: "CDMA",
     color: "bg-[linear-gradient(45deg,#569df5db_0%,#00d4ffdb_100%)]",
     icon: <Radio className="" size={48} />,
   },
 ];


  return (
    <div className="w-full flex flex-wrap justify-between rounded-lg shadow-[0_2px_20px_rgba(0,0,0,0.2)]  p-5 ">
      <span className="text-lg text-[#1784C7] font-medium">
        Citizen Services
      </span>
      <span className="text-lg text-[#1784C7] font-medium flex gap-1 cursor-pointer">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="mt-1" />
        Search for Service
      </span>
      <div className="w-full flex flex-wrap">
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1 p-5 justify-center ">
          {items.map((item, index) => (
            <motion.button
              key={index}
              className={`min-h-[100px]   rounded-lg m-1 text-5xl flex flex-wrap items-center justify-center  ${item.color}  hover:opacity-65`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="w-full flex  justify-center items-center text-slate-200 ">
                {item.icon}
              </span>
              <span className="text-xl ">{item.title}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
