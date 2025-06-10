import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16 px-4 sm:px-10">
      <div className="text-2xl mb-8">
        <Title text1={'my'} text2={'orders'} />
      </div>

      <div className="space-y-4">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-b py-4"
          >
            {/* Image + Info */}
            <div className="flex gap-4 items-start">
              <img src={item.image[0]} alt={item.name} className="w-16 sm:w-20 object-cover" />
              <div className="text-sm text-gray-700">
                <p className="text-base font-medium">{item.name}</p>
                <div className="flex gap-4 mt-1">
                  <p className="text-lg">{currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="text-gray-500 mt-1">
                  Date: <span className="text-gray-400">25, Jul, 2024</span>
                </p>
              </div>
            </div>

            {/* Status + Button */}
            <div className="flex items-center justify-between w-full md:w-auto md:gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <p className="text-sm md:text-base text-gray-700">Ready to ship</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm mt-2 md:mt-0">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
