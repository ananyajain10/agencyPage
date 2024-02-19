"use client"
import React, { use } from 'react'
import { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";
import Link from 'next/link';



const Navbar = () => {
    const [menu, setMenu] = useState(false);
    
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
    <main>
        <nav 
      className='flex justify-between px-8 py-6 items-center'>
          {/* logo  */}
        <section className='flex items-center '>
        <MdMenu className= "text-3xl cursor-pointer lg:hidden" onClick = {() => (setMenu(true), console.log(menu))}/>
        <Link href={"/"} className='text-4xl'> TechDice.</Link>
        <div className='flex items-center gap-6 px-8'>
          {navLinks.map((d, i) => {
                return  <Link key={i} href={d.link} className='hidden p-3 rounded lg:block text-2xl text-grey-20 hover:bg-blue-400 transition-all duration-300 ease-in-out z-40 transform '>{d.title}</Link>

          })}
        </div>
        </section>
        {/* menu */}
        <section className={clsx('fixed w-full h-full lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-all duration-300 ease-in-out z-40 transform',
        menu ? "-translate-x-0" : "-translate-x-full")}>
        <section className='absolute  p-8 gap-8 z-50 w-56 h-screen flex flex-col top-0 left-0 '>
            <IoClose className='text-3xl cursor-pointer' onClick={() => setMenu(false)}/>

            {navLinks.map((d,i)=> {
                return  <Link key={i} href={d.link} className='text-2xl font-bold'>{d.title}</Link>
            })}
           
           
        </section>
        </section>
        <section className='flex'>
            <button className='p-3 rounded bg-blue-600 lg:block text-2xl text-grey-20 hover:bg-blue-400 transition-all duration-300 ease-in-out z-40 transform '>Get Started</button>
        </section>
    </nav>

    <hr />
    
    </main>
  )
}

export default Navbar