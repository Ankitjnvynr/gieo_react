import React, { useRef } from 'react';
import FlipPage from 'react-flip-page';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Flip = () => {
  const flipPageRef = useRef(null); // Reference to the FlipPage component
  const pages = Array.from({ length: 45 }, (_, index) => ({
    title: `Page ${index + 1}`,
    content: `This is the content of page ${index + 1}`,
  }));

  // Function to go to the next page
  const nextPage = () => {
    if (flipPageRef.current) {
      flipPageRef.current.next(); // Move to the next page
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (flipPageRef.current) {
      flipPageRef.current.previous(); // Move to the previous page
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-white-100 relative"
      style={{
        backgroundImage: `url('public/img/png-clipart-peafowl-feather-peacock-feather-background-animals-photography-thumbnail-removebg-preview.png')`, // Add the background image here
        backgroundSize: '600px 200px;', // Make sure the background covers the entire container
        backgroundPosition: 'right mx-3 my-2', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
      }}
    >
      {/* FlipPage Component */}
      <FlipPage
        ref={flipPageRef}
        orientation="horizontal"
        showHint
        width={800}
        height={500}
        uncutPages
        animationDuration={500}
        className="shadow-lg border border-gray-300 rounded-lg"
      >
        {pages.map((page, index) => (
          <article
            key={index}
            className="p-6 bg-white hover:bg-gray-100 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-gray-700">{page.title}</h2>
            <p className="mt-4 text-gray-600">{page.content}</p>
          </article>
        ))}
      </FlipPage>

      {/* Left Arrow */}
      <button
        onClick={prevPage}
        className="absolute left-10 text-gray-700 hover:text-black p-2 rounded-full bg-white shadow-md hover:bg-gray-200 transition-all duration-300"
      >
        <FaArrowLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextPage}
        className="absolute right-10 text-gray-700 hover:text-black p-2 rounded-full bg-white shadow-md hover:bg-gray-200 transition-all duration-300"
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};

export default Flip;
