
import React from 'react'
import { Input } from './ui/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Status:React.FC = () => {
  return (
    <div className="shadow-[0_2px_20px_rgba(0,0,0,0.2)] w-full  px-6 py-3 rounded-xl flex flex-wrap text-center  min-h-[200px]">
      <div className="my-4 w-full">
        <div className="w-full space-y-2">
          <span className="font-medium text-[#204C6F] block mb-1 text-start">
            Know your application status
          </span>
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Know your application status"
              className="w-full pr-12 h-10  bg-gray-100"
              
            />
            <div className="absolute inset-y-0 right-0 flex items-center bg-[#337AB7] px-3 rounded-r-md">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white text-lg"
              />
            </div>
          </div>
          <span className=" font-medium text-[#204C6F] block mb-1 text-start">
            MeeSeva Certificate (Application no)
          </span>
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="MeeSeva Certificate (Application no)"
              className="w-full pr-12 h-10  bg-gray-100"
              
            />
            <div className="absolute inset-y-0 right-0 flex items-center bg-[#337AB7] px-3 rounded-r-md">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white text-lg"
              />
            </div>
          </div>
        </div>
        <h1 className="text-2xl underline mt-4 px-6 text-[#F07C25] animate-blink ">
          Know Your GHMC Application Status (Birth / Death)
        </h1>
      </div>
    </div>
  );
}

export default Status