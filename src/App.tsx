import React from "react";
import Navbar from "./components/Navbar";
import TestimonialsBorderIcon from "./assets/icons/testimonials-border.svg";
import TestimonialsInnerIcon from "./assets/icons/testimonials-inner.svg";
import Squiggle from "./assets/icons/squiggle.svg";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="flex flex-col items-center bg-white h-full w-full">
      <Navbar />
      <div className="relative flex justify-center items-center mt-10 mb-3">
        <img src={TestimonialsBorderIcon} alt="Testimonials Icon" />
        <img
          className="absolute"
          src={TestimonialsInnerIcon}
          alt="Testimonials Icon"
        />
      </div>
      <div className="flex text-center justify-center items-center text-periwinkle100 font-bold text-3xl">
        Testimonials I’ve left
        <div className="border border-periwinkle10 px-3 py-1 rounded-full font-medium text-sm ml-4">
          47
        </div>
      </div>
      <img className="mt-5 mb-9" src={Squiggle} alt="Squiggle Line" />
      <div className="flex-1 w-full px-8 pb-10">
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
