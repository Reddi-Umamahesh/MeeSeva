import React from 'react'
import img from '../assets/logo.png'
import img1 from '../assets/nav-img-1.jpg'
import img2 from "../assets/nav-img-2.jpg";
const Header:React.FC = () => {
  return (
    <div className="sm:h-36 h-36 w-full overflow-hidden flex items-center px-5 justify-between py-2">
      <div className="h-[80%] flex gap-6  w-full sm:w-m-[40%]">
        <span>
          <img className=" object-cover h-full" src={img} alt="" />
        </span>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-medium text-blue-900">MeeSeva</h1>
          <span className='font-light'>Government of Telanagana</span>
        </div>
      </div>
      <div className="h-full flex gap-6 max-w-[50%] w-0 sm:min-w-[40%] overflow-hidden">
        <div className="flex ">
          <span className="mt-auto mb-2">
            <h1 className="text-xl text-blue-800 font-medium">
              Sri A.Revanth Reddy
            </h1>
            <p className="mt-0 leading-tight font-light">Hon'ble Cheif Minister</p>
          </span>
          <span>
            <img className="object-cover h-full " src={img1} alt="" />
          </span>
        </div>
        <div className="flex ">
          <span className="mt-auto mb-2">
            <h1 className="text-xl text-blue-800 font-medium">
              Sri D.Sridhar Babu
            </h1>
            <p className="mt-0 leading-tight font-light">Hon'ble Minister for IT</p>
          </span>
          <span>
            <img className="object-cover h-full " src={img2} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header