import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
  
    const {currency,delivery_fee,getCartAmount}=useContext(ShopContext);
  
    return (
    <div className="w-full">
       <div className="text-2xl">
        <Title text1={'cart'} text2={'totals'} />
       </div>

       <div className="flex flex-col mt-2 text-sm">
        <div className="flex justify-between">
            <p>subtotal</p>
            <p>{currency}{getCartAmount()}.00</p>
        </div>
        <hr />

        <div className="flex justify-between">
           <p>shipping fee</p>
           <p>{currency}{delivery_fee}.00</p>
        </div>
        <hr />

        <div className="flex justify-between">
        <b>Total</b>
        <b>{currency} {getCartAmount()===0 ? 0:getCartAmount()+delivery_fee}</b>
        </div>
       </div>
    </div>
  )
}

export default CartTotal