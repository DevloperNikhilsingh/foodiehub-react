import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col space-y-3 mt-0 bg-gray-300 p-2'>

      <div className="flex justify-between items-center">
        <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-yellow-400 via-orange-500 to-red-600 drop-shadow-lg">
          FoodieHub
        </div>
        <div className="icon flex space-x-4">
          <img src="facebook-176-svgrepo-com.svg" alt="" className='w-6 h-6 rounded-full' />
          <img src="twitter-3-svgrepo-com.svg" alt="" className='w-6 h-6 rounded-full' />
          <img src="instagram-svgrepo-com.svg" alt="" className='w-6 h-6 rounded-full' />
          <img src="linkedin-svgrepo-com.svg" alt="" className='w-6 h-6 rounded-full' />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* box-1 */}
        <div className="box-1">
          <h1 className='text-left text-bold text-[18px]'>About</h1>
          <p className='text-left text-sm mt-2'>Our Story</p>
          <p className='text-left text-sm mt-1'>Our Location</p>
        </div>

        {/* box-2 */}

        <div className="box-1">
          <h1 className='text-left text-bold text-[18px]'>Service</h1>
          <p className='text-left text-sm mt-2'>Bakery</p>
          <p className='text-left text-sm mt-1'>Restaurant</p>
          <p className='text-left text-sm mt-1'>Takeaway</p>
        </div>


        {/* box-3 */}

        <div className="box-1">
          <h1 className='text-left text-bold text-[18px]'>Quick links</h1>
          <p className='text-left text-sm mt-2'>Downioads</p>
          <p className='text-left text-sm mt-1'>Profile</p>
          <p className='text-left text-sm mt-1'>Takeaway</p>
        </div>

        {/* box-4 */}

        <div className="box-1">
          <h1 className='text-left text-bold text-[18px]'>Help</h1>
          <p className='text-left text-sm mt-2'>Contact us</p>
          <p className='text-left text-sm mt-1'>Support</p>
          <p className='text-left text-sm mt-1'>FAQ's</p>
        </div>
      </div>

      <div className="mt-4 py-4 text-center">
        <div className="">
          <h2 className='text-[17px] font-arial underline'>Subscribe to Our Newsletter</h2>
        </div>
        <div className="mt-2">
          <input type="text" placeholder='Enter E-mail Address' className='w-[200px] h-[39px] px-2 outline-0 border-2 rounded-tl-xl rounded-bl-xl' />
          <button className='px-4 py-2 bg-green-400 border-green-400  text-bold rounded-tr-xl rounded-br-xl'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
