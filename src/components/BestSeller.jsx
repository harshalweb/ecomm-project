import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const{products}=useContext(ShopContext);
   
    const[bestSeller,setBestSeller]=useState([]);

    useEffect(()=>{
       const bestProduct=products.filter((item)=>(item.bestseller));
       setBestSeller(bestProduct.slice(0,5))
    },[])

    return (
      <div className="my-10">
      <div className="text-center text-3xl py-8">
          <Title text1={'best'} text2={'sellers'} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis, excepturi iusto libero facilis, tempore iste nobis officia odit fuga nostrum aperiam doloribus earum porro repellendus, ut molestias quas repudiandae?
          </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          bestSeller.map((item,index)=>(
              <ProductItem key={index} id={item._id} name={item.name}  image={item.image} price={item.price} />
          ))
        }
      </div>
  </div>

  )
}

export default BestSeller