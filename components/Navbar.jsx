import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs'
import { useRef } from 'react';

const Navbar = () => {

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }

  const ref = useRef()

  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font mb-2 shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"}>
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <div className=' w-10 h-10 mx-auto '>
                <Image
                  src={require("../public/logo.png")}
                  alt="logo image here"
                />
              </div>
              <span className="ml-3 text-xl">CodesWear</span>
            </a>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center cursor-pointer">
            <Link href={"/tshirts"}><a className="mr-5 hover:text-white">Tshirts</a></Link>
            <Link href={"/hoodies"}><a className="mr-5 hover:text-white">Hoodies</a></Link>
            <Link href={"/stickers"}><a className="mr-5 hover:text-white">Stickers</a></Link>
            <Link href={"/mugs"}><a className="mr-5 hover:text-white">Mugs</a></Link>
          </nav>
          <button onClick={toggleCart} className="cart inline-flex items-center py-1 px-3 focus:outline-none text-xl mt-4 md:mt-0">Cart <AiOutlineShoppingCart className='ml-2 text-2xl' /></button>
        </div>

        <div ref={ref} className="w-72 h-full z-10 sideCart absolute text-white bg-gray-600 rounded-md top-0 right-0 px-8 py-10 transform transition-transform translate-x-full">
          <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
          <span onClick={toggleCart} className="absolute top-4 right-2 cursor-pointer text-2xl text-gray-300"><AiOutlineClose /></span>
          <ol className='list-decimal font-semibold'>
            <li>
              <div className="item flex my-3">
                <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
                <div className='w-1/3 font-semibold flex items-center justify-center'><AiOutlineMinusCircle className='mx-3 cursor-pointer'/> 1 <AiOutlinePlusCircle className='mx-3 cursor-pointer'/></div>
              </div>
            </li>
            <li>
              <div className="item flex my-3">
                <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
                <div className='w-1/3 font-semibold flex items-center justify-center'><AiOutlineMinusCircle className='mx-3 cursor-pointer'/> 1 <AiOutlinePlusCircle className='mx-3 cursor-pointer'/></div>
              </div>
            </li>
            <li>
              <div className="item flex my-3">
                <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
                <div className='w-1/3 font-semibold flex items-center justify-center'><AiOutlineMinusCircle className='mx-3 cursor-pointer'/> 1 <AiOutlinePlusCircle className='mx-3 cursor-pointer'/></div>
              </div>
            </li>
            <li>
              <div className="item flex my-3">
                <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
                <div className='w-1/3 font-semibold flex items-center justify-center'><AiOutlineMinusCircle className='mx-3 cursor-pointer'/> 1 <AiOutlinePlusCircle className='mx-3 cursor-pointer'/></div>
              </div>
            </li>
            <li>
              <div className="item flex my-3">
                <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
                <div className='w-1/3 font-semibold flex items-center justify-center'><AiOutlineMinusCircle className='mx-3 cursor-pointer'/> 1 <AiOutlinePlusCircle className='mx-3 cursor-pointer'/></div>
              </div>
            </li>
            <li>
              <div className="item flex my-3">
                <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
                <div className='w-1/3 font-semibold flex items-center justify-center'><AiOutlineMinusCircle className='mx-3 cursor-pointer'/> 1 <AiOutlinePlusCircle className='mx-3 cursor-pointer'/></div>
              </div>
            </li>
          </ol>
          <button className="flex mx-auto mt-16 text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-sm"><BsFillBagCheckFill className='my-auto mr-3'/> Checkout</button>
        </div>

      </header>
    </div>
  )
}

export default Navbar