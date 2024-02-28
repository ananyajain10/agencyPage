"use client"
import React from 'react'
import Image from 'next/image'
import homebg from '@/assets/hero.jpg' 
import {motion } from 'framer-motion'




const Hero = () => {
  const cardVariants =  {
    onscreen: {
      
      
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8
      }
    }
  };
  
  const fadeTitleVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition:{
        staggerChildren:0.25
      },
     },
  }

  return (
    <div className='flex flex-col justify-items-center	 mt-20  pt-10 overflow-hidden'>

    {/* left section */}

    <div className='flex flex-col   justify-center  items-center  '>
        <motion.h1 
        variants = {fadeTitleVariants}
        initial={{opacity:0, x: -100}}
        animate={{opacity:1, x:0}}
        transition={{duration: 1.5, ease:"easeOut", delay: 0.1}}
        className='text-5xl font-serif font-semibold text-cyan-500	'>Innovative <span className='text-4xl z-50 rounded font-bold text-white'>AI</span> <br /> <p className='indent-20 text-green-500'> Solutions </p></motion.h1>
        <motion.span 
        variants = {fadeTitleVariants}
        initial={{opacity:0, x: -100}}
        animate={{opacity:1, x:0}}
        transition={{duration: 1.5, ease:"easeOut", delay: 0.5}}
        className='tracking-wide text-1xl py-2 text-center'>Increase your sales with the help of AI automation.</motion.span>
        <motion.button
        variants = {fadeTitleVariants}
        initial={{opacity:0, x: -100}}
        animate={{opacity:1, x:0}}
        transition={{duration: 1.5, ease:"easeOut", delay: 0.9}}
        className='rounded-full transition ease-in-out delay-150 text-white border border-black hover:-translate-y-1 hover:scale-110  duration-300 bg-gradient-to-r from-blue-500 to-black w-fit p-1.5 flex md:items-center drop-shadow-2xl'>
          Get To Know Us</motion.button>
    </div>
 
 <br /><br /> <br />
  
 <motion.div 
    variants={fadeTitleVariants}
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
    className='relative p-10 flex justify-center overflow-hidden'>
<div className='relative flex justify-center items-center  w-[900px]'> 
    {/* Box at top right */}
    <div className="absolute flex items-center text-3xl md:text-9xl top-[5px] right-[24px] w-[13px] h-[13px] md:w-40 md:h-40 rounded-lg z-1  animate-bounce" style={{ animationDuration: '5s' }}>
        🤖 
    </div>

    <div className='relative flex items-center justify-center rounded backdrop-blur-sm bg-transparent-300/30 
                    w-[350px] h-[200px] md:w-[1500px] md:h-[400px] border border-white/30'>

        <Image src={homebg} alt="homebg" className='absolute rounded-lg flex items-center z-20 ' width={200} height={100} />
    </div>

    {/* Box at bottom left */}
    <div className="absolute bottom-[5px] right-[50px] md:bottom-[30px] md:right-[200px] flex items-center justify-center text-3xl w-[25px] h-[25px] md:text-9xl md:w-40 md:h-40 rounded-lg z-200 animate-bounce" style={{ animationDuration: '5s' }}>
        🧑‍💻
    </div>

    {/* Right div  */}
    <div className='absolute p-5 rounded border border-green  flex bottom-[5px]  md:bottom-[30px] left-[50px] w-[150px] h-[100px] md:left-[100px] md:h-[200px] md:w-[300px] backdrop-blur-sm bg-green-500/30 animate-bounce' style={{ animationDuration: '5s' }}>
        <Image src={homebg} alt="homebg" className='rounded-lg items-center z-20 md:mr-2' width={150} height={150} />
        <p className='md:text-2xl text-2xs flex items-center '> AI Ready solutions.</p>
    </div>

    </div>
</motion.div>

<br /> <br /> <br /> 

{/* card  */}
<div className='flex items-center justify-center'>
<motion.div
initial={{opacity:0}}
whileInView={{opacity:1}}
viewport={{ once: true, amount: 0.8 }}
variants={cardVariants}
className='md:text-3xl w-[1000px] items-center text-center	py-4 px-10 text-4xs'>
Introducing TechDice: The Ultimate AI-Powered Landing Page builder that requires no knowledge of Coding, 
sales & Marketing or even copywriting to build high converting Landing pages!
</motion.div>
</div>

<br /> <br /> 
<div className='flex items-center justify-center'>
<div className='relative mx-3 flex flex-col md:flex-row items-center justify-center rounded backdrop-blur-sm bg-white/20 
                    w-[200px] h-[200px] md:w-[1000px] md:h-[400px] border border-white/30'>

        <div className='absolute items-center w-[50px] h-[70px] bg-purple-500 '></div>
        
</div>
</div>
    </div>




  )
}

export default Hero