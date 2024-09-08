"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "../assets/logoLight.png"
import { FaSearch } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathName=usePathname()
  const [searchInput, setSearchInput] = useState("")
  const navBarList=[
    {
      title:"Home",
      link:"/user"
    },
    {
      title:"Cart",
      link:"/user/cart"
    },
    {
      title:"Profile",
      link:"/user/profile"
    },
    {
      title:"Studio",
      link:"/user/studio"
    },
    {
      title:"Shop",
      link:"/user/shop"
    },
  ]
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-400'>
        <nav className='h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2'>
            <Link href={"/user"}> 
              <Image src={logo} alt='logo' className='w-20'/>
            </Link>
            <div className='relative w-full hidden lg:inline-flex lg:w-[600px] h-10 text-base text-primeColor border-[1px] border-black items-center gap-2 justify-between px-6 rounded-md'>
                <input
                type='text'
                placeholder='Search your product here'
                className='flex-1 h-full outline-none bg-transparent placeholder:text-gray-600'
                onChange={(e)=>setSearchInput(e.target.value)}
                value={searchInput}
                />
                {searchInput ? <IoCloseOutline onClick={()=>setSearchInput("")} className='w-5 h-5 hover:cursor-pointer hover:text-red-500 duration-200'/> : <FaSearch className='w-5 h-5 hover:cursor-pointer'/>}
            </div>
            <div className='hidden md:inline-flex items-center gap-2'>
               {
                navBarList.map((elm)=>(
                  <Link 
                  href={elm?.link} 
                  key={elm?.link}
                  className={`flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-600 hover:underline underline-offset-1 decoration-[1px] hover:text-gray-950 md:border-r-[2px] border-r-gray-500 duration-200 ${pathName===elm?.link && "text-gray-950 underline"}`}
                  >
                    {elm?.title}
                  </Link>
                ))
               }
            </div>
        </nav>
    </div>
  )
}

export default Navbar