import React, { useState } from 'react'
import { menuData } from '../../public/menuData'
import { useCart } from '../context/CartContext';


function Menu() {

    const { addToCart } = useCart();   // <-- THIS WAS MISSING ✔️

    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);

    const starters = menuData.filter(item => item.category === "Starters")
    const MainCourse = menuData.filter(item => item.category === "Main Course") 
    const Drinks = menuData.filter(item => item.category === "Drinks")
    const Desserts = menuData.filter(item => item.category === "Desserts")

    //search list
    const Search = () => {
       const filtered = menuData.filter(item => item.name.toLowerCase().includes(query.toLowerCase())
    );
        setResult(filtered)
    }
    return (
        <div className='container m-auto mt-12' data-aos="fade-up">
            <div className='flex flex-col space-y-6'>
                <h1 className='text-2xl text-center font-bold font-arial'>OUR MENU</h1>
                <div className='flex flex-row justify-center'>
                    <input type="text" placeholder='Search ' className='w-[200px] h-[30px] outline-0 border-b-2'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} />
                    <img src="search-svgrepo-com.svg" alt="Search" onClick={Search} className='w-4 border-b-2'/>

                </div>
            </div>
{/* filter item ko show karne ke liye  */}
             {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
  {(result.length > 0 ? result : menuData).map(item => (
    <div key={item.id} className="p-4 shadow rounded-lg border">
      <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
      <p className="text-gray-600">Rs{item.price}</p>
      <button className="mt-2 px-4 py-2 bg-green-400 rounded">Add to Cart</button>
    </div>
  ))}
</div> */}

{/* Starters */}

            <h1 className='text-xl font-arial text-left mt-16 font-bold underline' data-aos="fade-up">Starters</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6" data-aos="fade-up">
                {starters.map(item => (
                    <div className="p-4 shadow rounded-lg border transition-all duration-300 hover:scale-101" data-aos="fade-up" key={item.id}>
                        <img src={item.image} alt={item.name} className='w-full h-40 object-cover rounded' />
                        <h2 className='text-lg font-semibold mt-2'>{item.name}</h2>
                        <p className="text-gray-600">Rs{item.price}</p>

                        <button className='mt-2 px-4 py-2 bg-green-400 rounded active:bg-green-300 transition-all duration-200 cursor-pointer' onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            {/* Main Course */}

            <h1 className='text-xl font-arial text-left mt-16 font-bold underline' data-aos="fade-up">Meals</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {MainCourse.map(item => (
                    <div className="p-4 shadow rounded-lg border transition-all duration-300 hover:scale-101" data-aos="fade-up" key={item.id}>
                        <img src={item.image} alt={item.name} className='w-full h-40 object-cover rounded bg-cover bg-center bg-no-repeate' />
                        <h2 className='text-lg font-semibold mt-2'>{item.name}</h2>
                        <p className="text-gray-600">Rs{item.price}</p>

                        <button className='mt-2 px-4 py-2 bg-green-400 rounded active:bg-green-300 transition-all duration-200 cursor-pointer'  onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            {/* Drinks */}

            <h1 className='text-xl font-arial text-left mt-16 font-bold underline' data-aos="fade-up">Drinks</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {Drinks.map(item => (
                    <div className="p-4 shadow rounded-lg border transition-all duration-300 hover:scale-101" data-aos="fade-up" key={item.id}>
                        <img src={item.image} alt={item.name} className='w-full h-40 object-cover rounded' />
                        <h2 className='text-lg font-semibold mt-2'>{item.name}</h2>
                        <p className="text-gray-600">Rs{item.price}</p>

                        <button className='mt-2 px-4 py-2 bg-green-400 rounded active:bg-green-300 transition-all duration-200 cursor-pointer'   onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            {/* Desserts */}

            <h2 className='text-xl font-arial text-left mt-16 font-bold underline' data-aos="fade-up">Desserts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {Desserts.map(item =>  (
                    <div className="p-4 shadow rounded-lg border transition-all duration-300 hover:scale-101" data-aos="fade-up" key={item.id}>
                        <img src={item.image} alt={item.name} className='w-full h-40 object-cover rounded'/>
                        <h2 className='text-lg font-semibold mt-2'>{item.name}</h2>
                        <p className="text-gray-600 mt-2">Rs{item.price}</p>
                        <button className='mt-2 px-4 py-2 bg-green-400 rounded active:bg-green-300 transition-all duration-200 cursor-pointer'   onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            
        </div>
    )
}

export default Menu
