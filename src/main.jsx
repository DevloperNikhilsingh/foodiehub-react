import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { CartProvider } from './context/CartContext'
import { Outlet } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import Menu from './components/Menu'
import MainLayout from './Layout'
import About from './components/About'
import Cart from './components/Cart'
import Login from './components/login'





const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "menu",
                element: <Menu />,
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "cart", element: <Cart /> 
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    }
])


createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    </React.StrictMode>
)