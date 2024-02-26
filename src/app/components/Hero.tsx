import React from 'react'
import Image from 'next/image'
import homebg from '@/assets/hero.jpg' 


type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='md:flex md:flex-row mt-20 overflow-hidden'>

    {/* left section */}
    <div className='flex flex-col  justify-center  items-center md:text-left md:w-3/5  '>
        <h1 className='text-5xl font-serif font-semibold text-black'>Innovative <span className='text-4xl z-50 bg-pink rounded font-bold'>AI</span> <br /> <p className='indent-20'> Solutions </p></h1>
        <span className='tracking-wide text-1xl py-2 text-center'>Increase your sales with the help of AI automation.</span>
        <button className='rounded-full transition ease-in-out delay-150 text-white border border-black hover:-translate-y-1 hover:scale-110  duration-300 bg-gradient-to-r from-blue-500 to-black w-fit p-1.5 flex md:items-center drop-shadow-2xl'>Get To Know Us</button>
    </div>
 
 <br /><br />
   
    <div className='relative md:w-2/5 flex m-5 place-content-center	overflow-hidden'>
     
<Image src={homebg} alt="homebg" className='rounded-lg z-10' width={370} height={370} />
  {/* Box at top right */}
     <div className="absolute top-0 right-0 bg-red-500 w-10 h-10 rounded-lg z-0  animate-spin"></div>

{/* Box at bottom left */}
<div className="absolute bottom-0 left-0 bg-blue-500 w-10 h-10 rounded-lg z-0 animate-spin"></div>
    
    </div>

   
</div>

  )
}

export default Hero