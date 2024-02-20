import React from 'react'
import Image from 'next/image'
import homebg from '@/assets/bg-home.jpeg' 


type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='h-[50vh] p-2 lg:h-[60vh] md:h-[55vh] sm:h-[65vh] flex flex-col lg:flex-row justify-center bg-scroll'>

    {/* left section */}
    <div className='flex flex-col  justify-center  items-center lg:w-1/2 '>
        <h1 className='text-3xl font-semibold text-black'>Innovative <span className='text-4xl z-50 bg-pink rounded font-bold'>AI</span> <br /> <p className='indent-20'> Solutions </p></h1>
        <span className='py-5 text-1xl'>Increase your sales with the help of AI automation.</span>
        <button className='rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-white w-fit p-1 flex items-center drop-shadow-2xl'>Get To Know Us</button>
    </div>

   
</div>

  )
}

export default Hero