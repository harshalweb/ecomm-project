import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'contact'} text2={'us'} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="" className="w-full md:max-w-[480px]" />
      
      <div className="flex flex-col justify-center items-start gap-6">
        <p className="font-semibold text-xl text-gray-600">our store</p>
        <p className="text-gray-500">hitech station <br /> highway route</p>
        <p className="text-gray-500">tel:050123 <br />email:abcd@</p>
        <p className="font-semibold text-xl text-gray-600 ">career at industery</p>
        <p className="text-gray-500">learn more about job opening</p>
        <button className="border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-500">explore jobs</button>
      </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact