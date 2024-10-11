import React, { useEffect, useState } from 'react'
import MenuComponent from './MenuComponent';
import menuData from './MenuData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';
const Navbar: React.FC = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const toggle = () => {
    SetIsOpen(!isOpen)
  }

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      SetIsOpen(false)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#244fad]  to-teal-500 w-full  flex items-center  sm:px-2 transition-all duration-150 ease-in-out flex-wrap">
      <div className="md:h-0 md:hidden flex justify-start h-8 transition-all duration-150 ease-in-out  w-full left-0">
        <Button onClick={toggle} className="border border-black  border-dotted flex justify-center items-center bg-[] text-slate-950 h-full hover:bg-[]">
          <FontAwesomeIcon icon={faBars} className="text-lg" />
        </Button>
      </div>
      {
        isOpen && (
          <div className="h-24   flex  items-center justify-center max-w-full transition-all duration-150 ease-in-out  px-2  w-full">
        <MenuComponent menuData={menuData} />
        </div>
        )
      }
      <div className="lg:h-12 md:h-24 h-0  md:flex hidden items-center justify-center max-w-full transition-all duration-150 ease-in-out  w-full">
        <MenuComponent menuData={menuData} />
      </div>
      
    </div>
  );
}

export default Navbar