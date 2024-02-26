import React from "react";
import Image from "next/image";
import testimonial1 from '@/assets/testimonial1.png' 
import testimonial2 from '@/assets/testimonial2.png'
import testimonial3 from '@/assets/testimonial3.png'


const Testimonial = () => {
  const testimonials = [
    {
      image: testimonial1,
      name: "Sumit Shah",
      review: "I am very happy with the service. I will definitely recommend to my friends and family."
    },
    {
      image: testimonial2,
      name: "Suhana Khan",
      review: "I am very happy with the service. I will definitely recommend to my friends and family."
    },
    {
      image: testimonial3,
      name: "Parv Sharma",
      review: "I am very happy with the service. I will definitely recommend to my friends and family."
    }
  ]
  return (
    <section id="testimonial">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What our clients say about us
        </h2>
        {/* testimonial container  */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* testimonial 1  */}

     { testimonials.map((testimonial, index) => {
       
       return(   <div key={index} className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg hover:bg-gray-200 bg-gray-100 md:w-1/3">
            <Image src={testimonial.image} alt="testiminial" className="w-16 -mt-14"/>
            <h5 className="text-lg font-bold">{testimonial.name}</h5>
            <p className="text-sm  text-black ">
              {testimonial.review}
            </p>
          </div>

       )})}
        <div className="flex md:hidden flex-col items-center p-6 space-y-6 rounded-lg mb-1 hover:bg-gray-200 bg-gray-100 md:w-1/3">
            <Image src={testimonial1} alt="testiminial" className="w-16 -mt-14"/>
            <h5 className="text-lg font-bold">Sumit Shah</h5>
            <p className="text-sm text-black">
            I am very happy with the service. I will definitely recommend to my friends and family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
