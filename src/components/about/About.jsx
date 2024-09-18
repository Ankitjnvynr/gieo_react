import React from 'react'
import { motion } from "framer-motion";
import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () =>{
    // Framer Motion Variants for animations
    const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeInOut" }
      }
    };
  
    const imageVariants = {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeInOut" }
      }
    };
  
    const textVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeInOut" }
      }
    };
  
    return (
      <section id="about" className="about py-16">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="section-title text-center mb-8">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-4 text-gray-600">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
  
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0"
              variants={imageVariants}
            >
              <img
                src="public/img/gyanji.jpg"
                className="img-fluid max-w-full rounded-lg"
                alt="Gyanji"
              />
            </motion.div>
  
            <motion.div
              className="lg:w-1/2 order-2 lg:order-1 lg:pl-10"
              variants={textVariants}
            >
              <h3 className="text-2xl font-semibold">
                Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
              </h3>
              <p className="fst-italic mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="list-none mt-4">
                <li className="flex items-center mb-3">
                  <i className="bi bi-check-circle text-red-500 mr-2"></i>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li className="flex items-center mb-3">
                  <i className="bi bi-check-circle text-red-500 mr-2"></i>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li className="flex items-center mb-3">
                  <i className="bi bi-check-circle text-red-500 mr-2"></i>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    );
  };
export default About