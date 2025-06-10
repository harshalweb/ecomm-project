import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext);
      
    const[visible,setVisible]=useState(false);
    const location=useLocation();

    useEffect(()=>{
             if(location.pathname.includes('collection') ){
                setVisible(true);
             }
             else{
                setVisible(false)
             }
    },[location])
  

    return showSearch && visible ? (
  <div className="text-center border-b bg-gray-50">
   <div className="justify-center items-center inline-flex py-2 mx-3 my-5 border border-gray-500 w-3/4 sm:w-1/2">
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="flex-1 outline-none" />
     <img src={assets.search_icon} alt="" className="w-4" />
   </div>
   <img src={assets.cross_icon} alt="" onClick={()=>setShowSearch(false)} className="w-3 inline cursor-pointer" />
  </div>
  ):null
}

export default SearchBar