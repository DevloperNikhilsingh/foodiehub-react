import React from 'react'
import { useCart } from '../context/CartContext';

function Cart() {
    const { cartItems } = useCart();
   const { cartItem, removeFromCart } = useCart();  

  return (
    <>
    {/* <h1 className="text-3xl font-bold mb-6 text-center mt-8 underline">Your Cart</h1> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 mt-8">
      

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Let’s add something delicious 🍕”</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="p-4 shadow-lg ">
            <img src={item.image} alt="" className='w-full h-40 object-cover rounded '/>
            <h2>{item.name}</h2>
            <p>₹{item.price}</p>
            <div className='flex flex-row justify-between'>
            <button className='mt-2 px-4 py-2 bg-green-400 rounded hover:bg-green-300 transition-all duration-200 cursor-pointer'   onClick={() => addToCart(item)}>Buy</button>
            <button className='mt-2 px-4 py-2 bg-gray-400 rounded hover:bg-gray-300 transition-all duration-200 cursor-pointer'   onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            </div>
          </div>
        ))
      )}
    </div>
    </>
  );
}


export default Cart
