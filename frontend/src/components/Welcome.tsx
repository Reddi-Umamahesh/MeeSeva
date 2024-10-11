import React from 'react'

const Welcome:React.FC = () => {
  return (
    <div className="text-[#3E454C] shadow-[0_2px_20px_rgba(0,0,0,0.2)] w-full  px-6 py-3 rounded-xl flex flex-wrap text-center  min-h-[200px]">
      <span className="lg:text-3xl  text-xl w-full   font-semibold flex items-center justify-center">Welcome to MeeSeva Portal</span>
      <p className='lg:text-base text-sm'>
        "MeeSeva" in Telugu means, 'At your service', i.e. service to citizens.
        It is a good governance initiative that ncorporates the vision of
        National eGov Plan "Public Services Closer to Home" and facilitates
        single entry portal for entire range of G2C& G2B services .
      </p>
    </div>
  );
}

export default Welcome