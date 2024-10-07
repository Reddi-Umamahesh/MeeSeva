import React from 'react'
import img from '../assets/logo.png'
const Header:React.FC = () => {
  return (
      <div className='h-44 w-full overflow-hidden flex items-center px-5'>
          <div className='h-[70%] flex gap-6'>
              <span ><img className=' object-cover h-full' src={img} alt="" /></span>
              <div className='flex flex-col items-center justify-center'>
                  <h1 className='text-5xl font-semibold text-blue-900'>MeeSeva</h1>
                  <span>Government of Telanagana</span>
            </div>
          </div>
          <div></div>
    </div>
  )
}

export default Header