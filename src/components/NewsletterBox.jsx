import React from 'react'

const NewsletterBox = () => {
  const onSubmitHandler=(event)=>{
    event.preventDefault();
  }

  
    return (
            
<div className="text-center">
          <p className="text-3xl text-gray-800">subscribe us for more updates</p>
          <p className="mt-5 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni eveniet optio magnam labore tenetur! Delectus totam id consequatur possimus alias quo, itaque, dignissimos deleniti numquam repellat cupiditate nulla inventore.</p>
            
            <form action="" onSubmit={onSubmitHandler} className="w-full sm:w-1/2 sm:flex items-center border-none gap-3 mx-auto my-6 border pl-2">
             <input type="emial" placeholder='enter the mail' className="w-full flex-1 outline-none " />             
             <button className="px-10 py-4 text-xs bg-black text-white">subscribe</button>
            </form>
         </div>      
  )
}

export default NewsletterBox