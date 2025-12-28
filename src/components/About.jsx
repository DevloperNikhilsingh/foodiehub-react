import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Navigate, NavLink, useNavigate } from 'react-router-dom'


function About() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [contactNumber, setContactNumber] = useState();
    const [numberofGuest, setNumberofGuest] = useState()
    const [reservationDate, setReservationDate] = useState();
    const [time, setTime] = useState();
    const [message, setMessage] = useState();


    const BookingDate = (e) => {
        e.preventDefault();

        if (!userName || !email || !contactNumber || !numberofGuest || !reservationDate || !time || !message) {
            alert("Plz Fill all Required Details");
            return;
        }

        alert(`Congratulation ! \n\n ${userName}, your Reservation on ${reservationDate} at ${time} has been successfully Booked. We look forward to serving you!`)

        //Clear form After Submit
        // setUserName("");
        // setEmail("");
        // setContactNumber("");
        // setNumberofGuest("");
        // setReservationDate("");
        // setTime("");
        // setMessage("");
    };


    return (
        <div className="w-full flex flex-col justify-centere" data-aos="fade-up">
            <div className="h-[60vh] bg-[url('/About_Background.jpg')] bg-cover bg-center bg-no-repeate flex flex-col justify-center items-center " data-aos="fade-up">
                <div className="flex justify-center items-center">
                    <div className="flex mt-2 ">
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm hidden md:block">⭐ </p>
                    </div>
                    <h1 className='text-gray-400 text-xl font-bold mt-2' data-aos="fade-up">WHERE TASTE MEETS ELEGANCE</h1>
                    <div className="flex mt-2">
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm hidden md:block">⭐ </p>
                    </div>
                </div>

                <h2 className='text-xl text-white font-bold md:text-2xl ' data-aos="fade-up">Delicious Dishes & Memorable Moments</h2>

                <div className="p-2">
                    <p className='text-sm text-gray-200 md:hidden' data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <button className='px-4 py-1 backdrop-blur-2xl text-white border-2 rounded-2xl hover:bg-amber-800 transition-all duration-200 cursor-pointer' data-aos="fade-up" onClick={() => navigate("/menu")}>VIEW FULL MENU</button>
            </div>

            <div className="m-auto md:flex md:ml-80 p-4 space-x-4 md:space-x-10" data-aos="fade-up">
                <div className="left flex items-center md:items-start" data-aos="fade-up">
                    <img src="Image.png" alt="image" className=' w-[400px] md:w-80  h-50 md:h-60 rounded-4xl bg-cover bg-center bg-no-repeate' data-aos="fade-up" />
                </div>
                <div className="right flex flex-col space-y-1" data-aos="fade-up">
                    <div className="flex">
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm hidden md:block">⭐ </p>
                    </div>
                    <p className='text-sm text-orange-500 font-bold'>ABOUT US</p>
                    <h3 className='text-xl font-semibold'>A Culinary Experiance Of <br /> <span className='text-xl text-orange-500 font-semibold'>Elegance and Excellence</span></h3>
                    <p className='text-sm text-gray-500 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>

                    <div className="flex items-center space-x-4">
                        <div className="1-box">
                            <h1 className='text-xl font-bold text-orange-500'>5-Star</h1>
                            <p className='text-sm font-semibold text-gray-500'>Dining Experiance</p>
                        </div>
                        <div className='w-0.5 h-10 bg-gray-400'></div>
                        <div className="2-box">
                            <h1 className='text-xl font-bold text-orange-500'>60,000+</h1>
                            <p className='text-sm font-semibold text-gray-500'>Happy Quest</p>
                        </div>
                        <div className='w-0.5 h-10 bg-gray-400'></div>
                        <div className="3-box">
                            <h1 className='text-xl font-bold text-orange-500'>99%</h1>
                            <p className='text-sm text-gray-500 font-semibold'>Quest Satisfaction</p>
                        </div>
                    </div>

                    {/* <h1 className='text-2xl font-greatvibes'>Nikhil singh</h1> */}
                    <h1 className="signature-font text-4xl mt-4">Nikhil Singh</h1>
                    <div className="flex space-x-5 items-center">
                        <p className='text-sm font-semibold'>Nikhil singh</p>
                        <div className='w-0.5 h-10 bg-gray-400'></div>
                        <li className='ml-1 list-none'>Owner</li>
                    </div>
                </div>
            </div>


            <div className="m-auto p-2">
                <h1 className='text-2xl font-serif font-semibold underline text-center' data-aos="fade-up">OUR CHEFF</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4" data-aos="fade-up">
                    <div className="shadow-lg p-2 rounded-2xl transition-all duration-300 hover:scale-101" data-aos="fade-up">
                        <img src="/user4.avif" alt="" className='rounded-xl h-[250px] w-[400px] bg-cover bg-center bg-no-repeate' />
                        <p className='text-center text-2xl font-medium'>Chef Rahul</p>
                        <p className='text-center text-[15px] font-semibold'>Head Chef</p>

                    </div>
                    <div className="shadow-lg p-2 rounded-2xl transition-all duration-300 hover:scale-101" data-aos="fade-up">
                        <img src="chef2.jpg" alt="" className='rounded-xl h-[250px] w-[400px] bg-cover bg-center bg-no-repeate ' />
                        <p className='text-center text-2xl font-medium'>Chef Lewin</p>
                        <p className='text-center text-[15px] font-semibold'>Vegiterian Chef</p>
                    </div>
                    <div className="shadow-lg p-2 rounded-2xl transition-all duration-300 hover:scale-101" data-aos="fade-up">
                        <img src="Chef-3.jpeg" alt="" className='rounded-xl h-[250px] w-[400px] bg-cover bg-center bg-no-repeate ' />
                        <p className='text-center text-2xl font-medium'>Chef Payal</p>
                        <p className='text-center text-[15px] font-semibold'>Continental Chef</p>
                    </div>
                </div>
            </div>


            <div className=' bg-orange-200 flex flex-row space-x-10' data-aos="fade-right">
                <div className="p-2 w-full">
                    <div className="flex justify-center">
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                        <p className="text-sm">⭐ </p>
                    </div>
                    <h3 className='text-center text-orange-500 font-semibold'>RESERVE A TABLE</h3>
                    <h1 className='text-2xl font-semibold font-serif text-center'>Dine With Us <span className='text-orange-500'>-Reserve Now</span></h1>


                    <form onSubmit={BookingDate} className='p-2 '>
                        <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-semibold ml-1'>Name</label>
                                <input type="userName" placeholder='abc28'
                                onChange={(e) => setUserName(e.target.value)}
                                className='bg-white rounded-2xl outline-0 p-2' required />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-semibold ml-1'>Email*</label>
                                <input type="email" placeholder='example@gamil.com'
                                onChange={(e) => setEmail(e.target.value)}
                                required className='bg-white rounded-2xl outline-0 p-2' />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-semibold ml-1'>Contact Number</label>
                                <input type="tel" placeholder='+91 9161XXXX28'
                                onChange={(e) => setContactNumber(e.target.value)}
                                className='bg-white rounded-2xl outline-0 p-2' required />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-semibold ml-1'>Number of Guest's</label>
                                <select name="select" id="" className='bg-white rounded-2xl p-2 outline-0'
                                onChange={(e) => setNumberofGuest(e.target.value)}
                                required >
                                    <option value="select">select</option>
                                    <option value="select">1</option>
                                    <option value="select">2</option>
                                    <option value="select">3</option>
                                    <option value="select">4</option>
                                    <option value="select">5</option>
                                    <option value="select">6</option>
                                    <option value="select">7</option>
                                    <option value="select">8</option>
                                    <option value="select">9</option>
                                </select>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-semibold ml-1'>Reservation Date*</label>
                                <input type="date" placeholder='Date' className='bg-white rounded-2xl outline-0 p-2'
                                onChange={(e) => setReservationDate(e.target.value)}
                                required />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-semibold ml-1'>Time of Reservation*</label>
                                <input type="Time" placeholder='time' className='bg-white rounded-2xl outline-0 p-2' 
                                onChange={(e) => setTime(e.target.value)}
                                required />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-semibold ml-1'>Comments</label>
                                <input type="message" placeholder='Type Something' className='bg-white rounded-2xl outline-0 p-2 h-20 max-w-full' 
                                onChange={(e) => setMessage(e.target.value)}
                                required />
                            </div>


                        </div>
                        <div className='flex justify-center mt-6'>
                            <button className='px-4 md:px-10 md:text-2xl backdrop-blur-2xl py-1 bg-orange-600 rounded-2xl hover:bg-red-500'>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="w-[50%] h-full hidden md:block  justify-center items-center mt-20 " data-aos="fade-left">
                    <div className=" bg-black w-[300px] h-80 p-2 flex flex-col space-y-4 rounded-2xl">
                        <div className="">
                            <h1 className='text-white text-xl font-serif'>Address</h1>
                            <p className='text-white text-sm font-sans'>2463 Royal Ln. Mesa, New Jersey 452836</p>
                        </div>

                        <div className="">
                            <h1 className='text-white text-xl font-serif'>Contact</h1>
                            <p className='text-white text-sm font-sans'>Phone: +91 6392XXXX03</p>
                            <p className='text-white text-sm font-sans'>Email: example@gamil.com</p>
                        </div>

                        <div className="">
                            <h1 className='text-white text-xl font-serif'>Open Time</h1>
                            <p className='text-white text-sm font-sans'>Monday-Friday  : 11:00 AM - 10:00 PM</p>
                            <p className='text-white text-sm font-sans'>Saturday-Sunday  : 09:00 AM - 11:00 PM</p>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <h1 className='text-white text-xl font-serif'>Stay Connected</h1>
                            <div className="flex flex-row space-x-6">
                                <img src="/facebook-176-svgrepo-com.svg" alt="facebook" className='w-8 h-8 bg-white rounded-4xl' />
                                <img src="/twitter-3-svgrepo-com.svg" alt="twiter" className='w-8 h-8 bg-white rounded-4xl' />
                                <img src="/linkedin-svgrepo-com.svg" alt="linkedin" className='w-8 h-8 bg-white rounded-4xl' />
                                <img src="/instagram-svgrepo-com.svg" alt="instagram" className='w-8 h-8 bg-white rounded-4xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
