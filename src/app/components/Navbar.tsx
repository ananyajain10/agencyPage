"use client"
import React, { use } from 'react'
import { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";
import Link from 'next/link';
import { useAutoAnimate } from '@formkit/auto-animate/react'



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
      className='flex w-3/4 m-auto stickey bg-white py-1 rounded-full justify-between items-center'>
          {/* logo  */}
        <section className='flex items-center '>
        <MdMenu className= "text-3xl cursor-pointer lg:hidden" onClick = {() => (setMenu(true), console.log(menu))}/>
        <Link href={"/"} className='text-4xl px-6'> TechDice.</Link>
        <div className='flex items-center gap-4 px-8'>
          {navLinks.map((d, i) => {
                return  <Link key={i} href={d.link} className='hidden p-3 rounded lg:block text-2xl text-grey-20  hover:bg-blue-400 hover:text-white transition-all delay-0 duration-300 ease-out  z-40 transform '>{d.title}</Link>

          })}
        </div>
        </section>
        {/* menu */}
        <section ref={animationParent} className={clsx('fixed w-full text-white h-full lg:hidden bg-black/80 backdrop-blur-sm top-0 right-0 transition-all duration-300 ease-in-out z-40 transform',
        menu ? "-translate-x-0" : "-translate-x-full")}>
        <section  className='absolute  p-8 gap-8 z-50 w-56 h-screen flex flex-col top-0 left-0 '>
            <IoClose className='text-3xl cursor-pointer' onClick={() => setMenu(false)}/>

            {navLinks.map((d,i)=> {
                return  <Link key={i} href={d.link} className='text-2xl font-bold hover:bg-slate-400 rounded w-fit p-4'>{d.title}</Link>
            })}
           
           
        </section>
        </section>
        <span className={clsx('flex ', menu ? "hidden" : "block")}>
            <button className='p-3 rounded-l-lg bg-blue-600 lg:block text-1xl text-grey-20 hover:bg-blue-400 hover:text-white transition-all  duration-500 ease-in-out z-40 transform '>Upgrade</button>
        </span>
    </nav>

   
  )
}

export default Navbar