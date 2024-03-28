"use client"
import React, { useState, useEffect } from 'react';
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo2.png'
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector} from 'react-redux';
import { useRouter } from 'next/navigation'
import { logoutAdmin } from '../../../src/app/redux/actions/authSlice';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const dispatch = useDispatch();

    const loggedIn = Cookies.get('admin_token');
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    const handleLogout = (e) => {
        e.stopPropagation();
        dispatch(logoutAdmin());
        toast.success('Logged out successful');
        setTimeout(() => {
          router.push('/login');
        }, 1000);
      };

    const navLinks = [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
        { title: "Services", link: "/services" },
        { title: "Contact", link: "/contact" },
    ];

    return (
        <motion.nav 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={clsx(
                'font-sans fixed top-0 py-8 backdrop-blur-sm bg-black w-full transition-all duration-300',
                { 'transform': !visible, '-translate-y-full': !visible, 'shadow-lg': !visible }
            )}
        >
            <ToastContainer />
            <section className='flex top-0 w-full justify-between'>
                <MdMenu className="text-3xl cursor-pointer lg:hidden" onClick={() => (setMenu(true), console.log(menu))} />
                <div className='flex px-3'>
                    <Image src={logo} alt='logo' height={50} width={50} className='cursor-pointer' />
                    <Link href={"/"} className='text-5xl px-6 hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 translate-x-0'> TechDice</Link>
                </div>
                <div className='flex items-center gap-4 px-9'>
                    {navLinks.map((d, i) => (
                        <Link key={i} href={d.link} className='hidden p-3 rounded lg:block text-2xl text-grey-20  hover:bg-blue-400 hover:text-white transition-all delay-0 duration-300 ease-out  z-40 transform '>{d.title}</Link>
                    ))}
                    <button className='hidden md:flex p-3 rounded-full  bg-blue-600 lg:block text-1xl text-grey-20 hover:bg-blue-400 hover:text-white transition-all  duration-500 ease-in-out z-40 transform  border border-black'>
                        Upgrade
                    </button>
                    {loggedIn ? (
    <button
        name='button'
        type='button'
        onClick={handleLogout}
        className='hidden p-3 rounded lg:block text-2xl text-grey-20 hover:bg-blue-400 hover:text-white transition-all delay-0 duration-300 ease-out z-40 transform'
    >
        Sign Out
    </button>
) : (
    <Link
        href='/login'
        className='hidden p-3 rounded lg:block text-2xl text-grey-20 hover:bg-blue-400 hover:text-white transition-all delay-0 duration-300 ease-out z-40 transform'
    >
        Log In
    </Link>
)}
                </div>
            </section>
            {/* menu */}
            <section className={clsx(
                'fixed w-full text-white h-full lg:hidden top-0 right-0 transition-all duration-300 ease-in-out z-40 transform',
                menu ? "-translate-x-0" : "-translate-x-full"
            )}>
                <section className='absolute z-400 bg-gradient-to-r  from-blue-500 to-green-500  p-8 gap-8  w-56 h-screen flex flex-col top-0 left-0 '>
                    <IoClose className='text-3xl cursor-pointer' onClick={() => setMenu(false)} />
                    {navLinks.map((d, i) => (
                        <Link key={i} href={d.link} className='text-2xl font-bold hover:bg-black rounded transition-all duration-75 w-fit p-4'>{d.title}</Link>
                    ))}

{loggedIn ? (
    <button
        name='button'
        type='button'
        onClick={handleLogout}
        className='text-2xl font-bold hover:bg-black rounded transition-all duration-75 w-fit p-4'
    >
        Sign Out
    </button>
) : (
    <Link
        href='/login'
        className='text-2xl font-bold hover:bg-black rounded transition-all duration-75 w-fit p-4'
    >
        Log In
    </Link>
)}
                </section>
            </section>
        </motion.nav>
    );
};

export default Navbar;
