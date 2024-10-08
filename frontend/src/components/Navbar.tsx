import React from 'react'
import MenuComponent from './MenuComponent';
import menuData from './MenuData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';
const Navbar: React.FC = () => {
  
  return (
    <div className="bg-gradient-to-r from-[#244fad]  to-teal-500 w-full  flex items-center  px-2 transition-all duration-150 ease-in-out flex-wrap">
      <div className="md:h-0 md:hidden flex justify-start h-10 transition-all duration-150 ease-in-out  w-full">
        <Button className="border-2 border-black px-2 border-dotted flex justify-center items-center bg-[] text-slate-950">
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </Button>
      </div>
      <div className="lg:h-12 md:h-24 h-0  md:flex hidden items-center justify-center max-w-full transition-all duration-150 ease-in-out  w-full">
        <MenuComponent menuData={menuData} />
      </div>
      
    </div>
  );
}

export default Navbar