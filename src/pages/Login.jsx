import React, { useState } from 'react'

const Login = () => {
 
 const[currentState,setCurrentState]=useState('Sign Up');
 
 const onSubmitHandler=async(event)=>{
  event.preventDefault();
 }
  return (
    <form onSubmit={onSubmitHandler} action="" className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl ">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

     {currentState === 'Login' ? '' : <input type="text" placeholder='name' className="w-full px-3 py-2 border border-gray-800" required/>}
      <input type="email" placeholder='email' className="w-full px-3 py-2 border border-gray-800" required />
      <input type="password" placeholder='password' className="w-full px-3 py-2 border border-gray-800" required/>
    
    <div className="w-full flex justify-between text-sm mt-[-8px]">
     <p className="cursor-pointer">forgot password?</p>
    {
      currentState==='Login'
      ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>create account</p>
      : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>login here</p>
    }
    </div>
    
    <button className="bg-black text-white font-light px-8 py-2 mt-4">{currentState==='Login' ? 'Sign In' :'Sign Up' }</button>
    </form>
    
  )
}

export default Login