import React from 'react'

function Blog() {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full mt-8">
                <div className="flex flex-col space-y-4 items-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold md:text-3xl" data-aos="fade-up">Our Latest Blogs & Insights</h2>
                        <p data-aos="fade-up">Discover tips, ideas and Inspiring Stories</p>
                    </div>
                    <div className="flex items-center border-b-2" data-aos="fade-up">
                        <input type="text" placeholder="Search" className="outline-none px-2 py-1" />
                        <img src="search-svgrepo-com.svg" alt="search" className="w-4 ml-2" />
                    </div>
                </div>
            </div>


            <div className="mt-12">
                <h2 className=' text-2xl font-bold' data-aos="fade-up">Trending Blogs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {/* card-1 */}
                    <div className='p-6 rounded-2xl shadow-md flex flex-col transition-all duration-300 hover:scale-101' data-aos="fade-up">
                        <img src="/user1.jpg" alt=""
                            className="w-[255px] h-[255px] mb-4" />
                        <h4 className='text-xl font-semibold text-left'>The Ultimate Guide to Modern JavaScript</h4>
                        <p className='text-left'>competion for guide for Devlopers</p>
                        <div className="flex flex-row justify-start space-x-1.5">
                            <a href="#" className='text-blue-500 text-left'>Read More </a>
                            <img src="/right-arrow-svgrepo-com.svg" alt="" className='w-4' />
                        </div>
                    </div>
                    {/* card-2 */}


                    <div className='p-6 rounded-2xl shadow-md flex flex-col transition-all duration-300 hover:scale-101' data-aos="fade-up">
                        <img src="/user2.avif" alt=""
                            className="w-[255px] h-[255px] mb-4" />
                        <h4 className='text-xl font-semibold text-left'>The Ultimate Guide to Modern JavaScript</h4>
                        <p className='text-left'>competion for guide for Devlopers</p>
                        <div className="flex flex-row justify-start space-x-1.5">
                            <a href="#" className='text-blue-500 text-left'>Read More </a>
                            <img src="/right-arrow-svgrepo-com.svg" alt="" className='w-4' />
                        </div>
                    </div>
                    {/* card-3 */}
                    <div className='p-6 rounded-2xl shadow-md flex flex-col transition-all duration-300 hover:scale-101' data-aos="fade-up">
                        <img src="/user3.avif" alt=""
                            className="w-[255px] h-[255px] mb-4" />
                        <h4 className='text-xl font-semibold text-left'>The Ultimate Guide to Modern JavaScript</h4>
                        <p className='text-left'>competion for guide for Devlopers</p>
                        <div className="flex flex-row justify-start space-x-1.5">
                            <a href="#" className='text-blue-500 text-left'>Read More </a>
                            <img src="/right-arrow-svgrepo-com.svg" alt="" className='w-4' />
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-8 px-4 mb-6">
                <div className="text-center">
                    <h1>Watch Our Restaurant View</h1>
                    <div className="w-20 h-1 m-auto mt-2 rounded-full bg-green-400 text-center"></div>
                    <p className='text-gray-600 mt-3 text-sm'>Explore Behinde the Scenes recipies, cooking tips, and kitchen stories!</p>

                    <div className="mt-8 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg" data-aos="fade-up">
                        <iframe src="https://www.youtube.com/embed/Ao-cH0Z476I"
                            className='w-full h-60'
                            title='Youtoube Vedio Player'
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
