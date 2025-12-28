import React from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from "framer-motion";

function Home() {
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [showFirst, setShowFirst] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirst(prev => !prev);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <><div className="container mx-auto mt-10 md:mt-12 bg-gray-200 rounded-xl overflow-hidden px-4 sm:px-6 lg:px-10 py-8">

            <AnimatePresence mode="wait">

                {showFirst ? (
                    <motion.div
                        key="banner1"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col-reverse md:flex-row items-center justify-between gap-6"
                    >
                        {/* ===== LEFT CONTENT ===== */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                                One Place to <br />
                                <span className="text-orange-500">Stop, Every Food</span> <br />
                                You Need!
                            </h1>

                            <p className="py-3 text-sm sm:text-base text-gray-700">
                                Welcome to FoodieHub, where every meal is crafted with love.
                            </p>

                            <button className="mt-3 bg-green-500 px-6 py-2 rounded-3xl text-white active:bg-green-700 duration-150 transition-all" onClick={() => navigate("/menu")}>Explore Food</button>
                        </div>

                        {/* ===== RIGHT IMAGE ===== */}
                        <img
                            src="/herofood.png"
                            alt="food"
                            className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[360px]"
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="banner2"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col-reverse md:flex-row items-center justify-between gap-6"
                    >
                        {/* ===== LEFT CONTENT ===== */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                                Fresh & Healthy <br />
                                <span className="text-orange-500">Delicious Meals</span> <br />
                                Everyday!
                            </h1>

                            <p className="py-3 text-sm sm:text-base text-gray-700">
                                Taste the best dishes prepared by our expert chefs.
                            </p>

                            <button className="mt-3 bg-orange-500 px-6 py-2 rounded-3xl text-white hover:bg-orange-600 transition">
                                Order Now
                            </button>
                        </div>

                        {/* ===== RIGHT IMAGE ===== */}
                        <img
                            src="/Pizza.png"
                            alt="pizza"
                            className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[360px]"
                        />
                    </motion.div>
                )}

            </AnimatePresence>

        </div>

            <div className='container m-auto mt-16 px-4  flex justify-between items-center'>
                <h2 className='text-2xl text-black font-bold'>Popular Dishes</h2>
                <div className='flex space-x-3.5'>
                    <img src='left-arrow-4-svgrepo-com.svg' alt='' className='w-6' />
                    <img src='right-arrow-circle-svgrepo-com.svg' alt='' className='w-6' />
                </div>
            </div>

            <div className='hide-scroll container m-auto flex space-x-4 overflow-x-auto hide-scroll flex-nowrap '>
                <div className="min-w-[200px] transition-all duration-300 hover:scale-101">
                    <img src='/burger.png' alt='' className='w-[200px]' />
                    <h3 className='text-left ml-0.5'>Burger</h3>
                    <div className='flex flex-row'>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                    </div>
                    <div className='flex flex-row justify-start items-center space-x-16'>
                        <p className='text-black text-[15px] font-semibold'>$ 45.00</p>
                        <button className='border-2 px-2
                    text-[9px] py-0.5 rounded-2xl outline-0 active:bg-black active:text-white duration-100 transition-all' onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                </div>
                <div className="min-w-[200px] transition-all duration-300 hover:scale-101">
                    <img src='/Pani-puri.png' alt='' className='w-[200px]' />
                    <h3 className='text-left ml-0.5'>Street Food</h3>
                    <div className='flex flex-row'>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                    </div>
                    <div className='flex flex-row justify-start items-center space-x-16'>
                        <p className='text-black text-[15px] font-semibold'>$ 5.00</p>
                        <button className='border-2 px-2
                    text-[9px] py-0.5 rounded-2xl outline-0 active:bg-black active:text-white duration-100 transition-all' onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                </div>
                <div className="min-w-[200px] transition-all duration-300 hover:scale-101">
                    <img src='/Dosa.png' alt='' className='w-[200px]' />
                    <h3 className='text-left ml-0.5'>Burger</h3>
                    <div className='flex flex-row'>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                    </div>
                    <div className='flex flex-row justify-start items-center space-x-16'>
                        <p className='text-black text-[15px] font-semibold'>$ 30.00</p>
                        <button className='border-2 px-2
                    text-[9px] py-0.5 rounded-2xl outline-0 active:bg-black active:text-white duration-100 transition-all' onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                </div>
                <div className="min-w-[200px] transition-all duration-300 hover:scale-101">
                    <img src='/IceCream.png' alt='' className='w-[200px]' />
                    <h3 className='text-left ml-0.5'>Ice Cream</h3>
                    <div className='flex flex-row'>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                    </div>
                    <div className='flex flex-row justify-start items-center space-x-16'>
                        <p className='text-black text-[15px] font-semibold'>$ 10.00</p>
                        <button className='border-2 px-2
                    text-[9px] py-0.5 rounded-2xl outline-0 active:bg-black active:text-white duration-100 transition-all' onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                </div>
                <div className="min-w-[200px] transition-all duration-300 hover:scale-101">
                    <img src='/Momo.png' alt='' className='w-[200px]' />
                    <h3 className='text-left ml-0.5'>Momo</h3>
                    <div className='flex flex-row'>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                    </div>
                    <div className='flex flex-row justify-start items-center space-x-16'>
                        <p className='text-black text-[15px] font-semibold'>$ 50.00</p>
                        <button className='border-2 px-2
                    text-[9px] py-0.5 rounded-2xl outline-0 active:bg-black active:text-white duration-100 transition-all' onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                </div>
                <div className="min-w-[200px] transition-all duration-300 hover:scale-101">
                    <img src='/Pizza.png' alt='' className='w-[200px]' />
                    <h3 className='text-left ml-0.5'>Pizza</h3>
                    <div className='flex flex-row'>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                    </div>
                    <div className='flex flex-row justify-start items-center space-x-16'>
                        <p className='text-black text-[15px] font-semibold'>$ 60.00</p>
                        <button className='border-2 px-2
                    text-[9px] py-0.5 rounded-2xl outline-0 active:bg-black active:text-white duration-100 transition-all' onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                </div>

                <div className="min-w-[200px] transition-all duration-300 hover:scale-101">
                    <img src='/panirTika.png' alt='' className='w-[200px]' />
                    <h3 className='text-left ml-0.5'>Panir Tikka</h3>
                    <div className='flex flex-row'>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                    </div>
                    <div className='flex flex-row justify-start items-center space-x-16'>
                        <p className='text-black text-[15px] font-semibold'>$ 40.00</p>
                        <button className='border-2 px-2
                    text-[9px] py-0.5 rounded-2xl outline-0 active:bg-black active:text-white duration-100 transition-all' onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                </div>
            </div>

            <h1 className='mt-11 text-2xl font-semibold text-center md: font-bold ' data-aos="fade-up">We Offer People Best Way to Eat Healthy Food</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-5">

                {/* Card 1 */}
                <div className="p-6 rounded-2xl shadow-md bg-white flex flex-col items-center transition-all duration-300 hover:scale-101" data-aos="fade-up">
                    <img
                        src="/fresh.webp"
                        alt="Healthy Meals"
                        className="w-24 h-24 rounded-full mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">Healthy Meals</h3>
                    <p className="text-gray-500 text-sm text-center">
                        Fresh, clean and nutritious meals prepared by expert chefs.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="p-6 rounded-2xl shadow-md bg-white flex flex-col items-center transition-all duration-300 hover:scale-101" data-aos="fade-up">
                    <img
                        src="/fastDelivery.jpg"
                        alt="Fast Delivery"
                        className="w-24 h-24 rounded-full mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
                    <p className="text-gray-500 text-sm text-center">
                        Delivering food quickly, hot and fresh to your doorstep.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="p-6 rounded-2xl shadow-md bg-white flex flex-col items-center transition-all duration-300 hover:scale-101" data-aos="fade-up">
                    <img
                        src="/bestQuality.webp"
                        alt="Premium Quality"
                        className="w-24 h-24 rounded-full mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
                    <p className="text-gray-500 text-sm text-center">
                        We use the best quality ingredients for taste & health.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="p-6 rounded-2xl shadow-md bg-white flex flex-col items-center transition-all duration-300 hover:scale-101" data-aos="fade-up">
                    <img
                        src="/clock.webp"
                        alt="24/7 Support"
                        className="w-24 h-24 rounded-full mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                    <p className="text-gray-500 text-sm text-center">
                        We use the best quality ingredients for taste & health.
                    </p>
                </div>

            </div>



            <h2 className='text-xl font-semibold mt-12 text-center text-black underline' data-aos="fade-up">Our Customer Review</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
                {/* Review 1 */}
                <div className='p-6 rounded-2xl shadow-md flex flex-col transition-all duration-300 hover:scale-101' data-aos="fade-up">
                    <img src="/user1.jpg" alt=""
                        className="w-24 h-24 rounded-full mb-4" />
                    <h4 className='text-xl font-semibold text-left'>Rahul Sharma</h4>
                    <div className='flex flex-row justify-start'>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                    </div>
                    <p className='text-left'>Food quality was beyond my expectations!
                        Portion size bhi perfect tha, taste bilkul restaurant-style.
                        Delivery time se pehle mil gaya and packaging was very clean.
                        Definitely ordering again!</p>
                </div>

                {/* Review 2 */}
                <div className='p-6 rounded-2xl shadow-md flex flex-col  transition-all duration-300 hover:scale-101' data-aos="fade-up">
                    <img src="/user2.avif" alt=""
                        className="w-24 h-24 rounded-full mb-4" />
                    <h4 className='text-xl font-semibold text-left'>Amit Gupta</h4>
                    <div className='flex flex-row justify-start'>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                    </div>
                    <p className='text-left'>Healthy, tasty and freshly prepared — exactly what I wanted.
                        Flavours bohot balanced the, bilkul bhi oily nahi.
                        Customer service bhi fast and friendly tha.
                        Highly recommended for daily meals!</p>
                </div>

                {/* Review 3 */}
                <div className='p-6 rounded-2xl shadow-md flex flex-col transition-all duration-300 hover:scale-101' data-aos="fade-up">
                    <img src="/user3.avif" alt=""
                        className="w-24 h-24 rounded-full mb-4" />
                    <h4 className='text-xl font-semibold text-left'>Neha Verma</h4>
                    <div className='flex flex-row justify-start'>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                    </div>
                    <p className='text-left'>The food tasted absolutely delicious!
                        Presentation superb tha, bilkul café-level quality.
                        Ingredients fresh lage and aroma bhi amazing tha.
                        Worth every penny!</p>
                </div>

                {/* Review 4 */}
                <div className='p-6 rounded-2xl shadow-md flex flex-col transition-all duration-300 hover:scale-101' data-aos="fade-up">
                    <img src="/user4.avif" alt=""
                        className="w-24 h-24 rounded-full mb-4" />
                    <h4 className='text-xl font-semibold text-left'>Emeka</h4>
                    <div className='flex flex-row justify-start'>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                    </div>
                    <p className='text-left'>Loved the variety and authentic flavour of every dish!
                        Texture soft tha, spices bilkul balanced — not too heavy.
                        Delivery safely packed, leak-proof and warm.
                        Perfect for family meals and parties!</p>
                </div>
            </div>


            <div className="mt-14 p-2 border-b-2 bg-gray-300 flex flex-col text-center md:text-center space-y-2" data-aos="fade-up">
                <h1 className='text-4xl font-semibold font-arial text-center'>Book a Table for Dinner</h1>
                <p className='text-[13px] p-4 font-semibold font-arial text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus molestias obcaecati iure animi.</p>
                <form action="#" className='flex flex-col justify-center items-center space-y-3'>
                    <input className='w-[320px] h-[30px] border-b-2 outline-0' type="text" placeholder='Your Name' />
                    <input className='w-[320px] h-[30px] border-b-2 outline-0' type="text" placeholder='E-mail' />
                    <input className='w-[320px] h-[30px] border-b-2 outline-0' type="text" placeholder='Phone Number' />
                    <button className='px-8 py-2 rounded-2xl bg-green-300 text-[13px] hover:bg-green-400 transition-all duration-200 cursor-pointer' type='submit'>Book</button>
                </form>
            </div>

        </>
    )
}

export default Home
