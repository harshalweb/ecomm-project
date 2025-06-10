import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
   <div>
   <div className="text-2xl text-center pt-8 border-t">
      <Title text1={'about'} text2={'us'} />
      </div>
  
  <div className="my-10 flex flex-col md:flex-row gap-16">
    <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
  
  <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, qui sunt distinctio pariatur cumque et adipisci illo accusamus, minus atque corrupti voluptas optio quos, reprehenderit natus porro. Distinctio, accusamus provident.</p>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, saepe! Non ut sit optio maxime corporis molestias quia quaerat, debitis eaque nulla fuga facere aut impedit architecto assumenda nihil quis.</p>
    <b className="text-gray-800">our mission</b>
    <p>our mission make the product relible and efficient</p>
  </div>
 </div>

 <div className="text-xl py-4">
  <Title text1={'why'} text2={'choose us' } />
 </div>

 <div className="flex flex-col md:flex-row text-sm mb-20">
  <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>quality assurance</b>
    <p className='text-gray-600'>we are select each product to ensure the requirements</p>
  </div>

  <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>convience</b>
    <p className='text-gray-600'>with our user friendly products</p>
  </div>

  <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>excellence custmer support</b>
    <p className='text-gray-600'>experience of the custmer support</p>
  </div>
 </div>

 <NewsletterBox/>
   </div>
  )
}

export default About