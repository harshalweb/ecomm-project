import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center p-4 border border-gray-600">

    <div className="flex justify-center items-center w-full sm:w-1/2 ">

      <div className="text-red-600">
        <div className="flex items-center gap-2">
          <p className="w-11 sm:w-10 h-0.5 bg-gray-600"></p>
          <p className="font-semibold text-base">shop now</p>
        </div>

        <h1 className="text-5xl lg:text-5xl leading-relaxed">explore now</h1>

        <div className="flex items-center gap-2">
          <p className="font-semibold text-base">sale is live</p>
          <p className="w-11 sm:w-10 h-0.5 bg-gray-700"></p>
        </div> 
      </div>
    </div>

    <img src={assets.hero_img} alt="" className="w-full sm:w-1/2" />
  </div>

    )
}

export default Hero