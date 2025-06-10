import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
   
    <div>
        <img src={assets.logo} alt="" className="mb-5 w-32 " />
        <p className="w-full md:2/3 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab itaque dolore consequuntur voluptates veniam nesciunt numquam possimus at beatae voluptatum delectus, voluptas in, obcaecati, voluptatem dolor ut nihil. Quas, dignissimos.
    </p>
    </div>
    
    <div>
        <p className="text-xl font-medium mb-5 ">company</p>
    
    <ul className="flex flex-col gap-1 text-gray-600">
        <li>home</li>
        <li>about</li>
        <li>product</li>
        <li>company</li>
        </ul>
    </div>
   
   <div>
    <p className="text-xl font-medium mb-5 ">get in touch</p>
    <ul className="flex flex-col gap-1 text-gray-600 ">
        <li>123456789</li>
        <li>abcd</li>
    </ul>
   </div>
   </div>
   
   <div>
   <hr />
   <p className="py-5 text-sm text-center ">copyright access issue</p>
   </div>
   
   </div>
    )
}

export default Footer