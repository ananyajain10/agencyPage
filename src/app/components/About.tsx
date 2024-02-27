"use client"
import React from "react";
import {motion  } from 'framer-motion'

const About = () => {
  
  const AssistanceWays = [
    {
      item: "01",
      title: "lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deserunt nulla velit quisquam architecto. Amet reprehenderit officia harum illum debitis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quis veniam non maxime excepturi expedita quidem labore numquam inventore ullam.",
    },
    {
      item: "02",
      title: "lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deserunt nulla velit quisquam architecto. Amet reprehenderit officia harum illum debitis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quis veniam non maxime excepturi expedita quidem labore numquam inventore ullam.",
    },
    {
      item: "03",
      title: "lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deserunt nulla velit quisquam architecto. Amet reprehenderit officia harum illum debitis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quis veniam non maxime excepturi expedita quidem labore numquam inventore ullam.",
    },
    {
      item: "04",
      title: "lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deserunt nulla velit quisquam architecto. Amet reprehenderit officia harum illum debitis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quis veniam non maxime excepturi expedita quidem labore numquam inventore ullam.",
    },
  ];
  return (
    <section id="features">
      <div className=" font-sans container flex flex-col px-4 mx-auto mt-5 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <motion.h2 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mx-w-md md:text-left">
            Learn how we will help you to reach your goals
          </motion.h2>
          <p className="text-center mx-w-sm md:text-left">
            We provide a wide range of services to help you grow your business.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            facilis nostrum porro numquam fugiat ab magnam quo eos ea
            consequatur?
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* f1  */}
          {AssistanceWays.map((d, i) => {
            return ( <div key={i} className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* head  */}

            <div className="rounded-l-full bg-green-300 md:bg-transparent">
              <div className="flex items-center space-x-2">

                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-green-300">
                  {d.item}
                </div>

                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  {d.title}
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                {d.title}
              </h3>
              <p className="text-blue-900">
                {d.description}
              </p>
            </div>
          </div>
          )

        })} 
        </div>
      </div>
    </section>
  );
};

export default About;
