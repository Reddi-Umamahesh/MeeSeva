import React from 'react'
import { Input } from './ui/input';

import { Key, User } from 'lucide-react';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';


const Login:React.FC = () => {
    return (
      <div className="shadow-[0_2px_20px_rgba(0,0,0,0.2)] w-full min-h-[315px] px-6 py-3 rounded-xl">
        <h2 className="text-2xl text-[rgb(51,74,146)] font-semibold">Login</h2>
        <div className="my-4 w-full">
          <div className="w-full space-y-4">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Staff Code / Franchise Code / Login id "
                className="w-full pr-12 min-h-12 cursor-not-allowed"
              />
              <div className="absolute inset-y-0 right-0 flex items-center bg-[#337AB7] px-3 rounded-r-md ">
                <User className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="relative w-full">
              <Input
                type="password"
                placeholder="Password"
                className="w-full pr-12 min-h-12 cursor-not-allowed"
              />
              <div className="absolute inset-y-0 right-0 flex items-center bg-[#337AB7] px-3 rounded-r-md">
                <Key className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-md font-medium leading-none text-[#666666]  peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
          >
            Show Password
          </label>
        </div>
        <Button className="w-full rounded-lg bg-[#337AB7] hover:bg-[#334A92] text-lg my-3">
          Login
        </Button>
        <div className="w-full flex justify-between">
          {" "}
          <span className="text-[#1784C7] cursor-pointer">New user</span>
          <span className="text-[#F07C25] cursor-pointer">Forgot Password</span>
        </div>
      </div>
    );
}

export default Login