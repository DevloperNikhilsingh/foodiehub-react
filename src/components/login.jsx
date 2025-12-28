import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate();

const handlesubmit = (e) => {
    e.preventDefault();
    alert(`Hi, ${username} Welcome To Our Restaurent`)
    setUsername("");
    setEmail("");
    setPassword("");
    navigate("/")
}

    return (
        <div className='flex justify-center p-4'>
            <div className="p-4 flex  w-[700px]">

                {/* RIGHT BOX */}

                <div className='right-box w-[350px] shadow-2xl p-2'>

                    <div className='flex flex-col justify-center items-center'>
                        <img src="login_SubLogo.png" alt="login" className='w-15 h-10 rounded-2xl' />
                        <p className='text-small font-bold signature-font '>FoodieHub</p>
                    </div>

                    <div className=''>
                        <h1 className='text-2xl font-semibold text-center'>Welcome Back</h1>
                        <p className='text-[12px] text-center'>Sign in to Your Account</p>
                    </div>
                    <form className='flex flex-col justify-center items-center space-y-3' onSubmit={handlesubmit}>

                        <input type="username"placeholder='User Name' required
                        onChange={(e) => setUsername(e.target.value)} 
                        className='w-[300px] h-10 px-2 border-b-2 outline-0 bg-gray-50' />

                        <input type="email" placeholder='Email' required 
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-[300px] h-10 px-2 border-b-2 outline-0 bg-gray-50'/>

                        <input type="password" placeholder='Password' required
                        onChange={(e) => setPassword(e.target.value)}
                         className='w-[300px] h-10 px-2 border-b-2 outline-0 bg-gray-50' />
                        
                        <button className='text-[12px] w-[250px] bg-orange-500 border-0 outline-0 rounded-2xl p-2 mt-5 active:bg-orange-600'>
                            Sign In
                        </button>
                        <p className='text-[10px] font-bold'>Dont't have an account? <a href="#" className='text-blue-600'>Sign up</a></p>
                    </form>
                </div>

                {/* LEFT BOX */}

                <div className='left-box w-[350px] hidden md:block '>
                    <img src="Login_SideImage.jpeg" alt="" className='h-[370px] items-center ' />
                </div>
            </div>
        </div>
    )
}

export default Login
