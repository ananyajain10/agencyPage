"use client"
import React, { use } from 'react'
import { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";
import Link from 'next/link';
import Image from 'next/image';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import logo from '@/assets/logo2.png'



const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [animationParent] = useAutoAnimate()
    
    // navlink 

    const navLinks = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "About",
            link: "/about",
        },
        {
            title: "Services",
            link: "/services",
        },
        {
            title: "Contact",
            link: "/contact",
        },
    ]
  return (
   
        <nav 
      className='relative container mx-auto bg-white	 p-6 rounded-full border border-black'>
          {/* logo  */}

        <section className='flex items-center  justify-between mx-auto'>
            
        <MdMenu className= "text-3xl cursor-pointer lg:hidden" onClick = {() => (setMenu(true), console.log(menu))}/>
        <div className='flex'>
        <Image src={logo} alt='logo' height={50} width={50} className='cursor-pointer'/>
        <Link href={"/"} className='text-4xl px-6'> TechDice</Link>
        </div>
       
        <div className='flex items-center gap-4 px-9'>
          {navLinks.map((d, i) => {
                return  <Link key={i} href={d.link} className='hidden p-3 rounded lg:block text-2xl text-grey-20  hover:bg-blue-400 hover:text-white transition-all delay-0 duration-300 ease-out  z-40 transform '>{d.title}</Link>

          })}
           <button className=' hidden md:flex p-3 rounded-full bg-blue-600 lg:block text-1xl text-grey-20 hover:bg-blue-400 hover:text-white transition-all  duration-500 ease-in-out z-40 transform  border border-black'>
                Upgrade</button>

        </div>

       


        </section>
        {/* menu */}
        <section className={clsx('fixed w-full text-white h-full lg:hidden bg-black/80 backdrop-blur-sm top-0 right-0 transition-all duration-300 ease-in-out z-40 transform',
        menu ? "-translate-x-0" : "-translate-x-full")}>
        <section  className='absolute  p-8 gap-8 z-50 w-56 h-screen flex flex-col top-0 left-0 '>
            <IoClose className='text-3xl cursor-pointer' onClick={() => setMenu(false)}/>

            {navLinks.map((d,i)=> {
                return  <Link key={i} href={d.link} className='text-2xl font-bold hover:bg-slate-400 rounded w-fit p-4'>{d.title}</Link>
            })}
           
           
        
       </section>
       
        
        </section>
    </nav>

   
  )
}

export default Navbar