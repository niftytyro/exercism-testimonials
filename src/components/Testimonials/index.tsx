import React from "react";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";
import LoadingIndicator from "../../assets/loading-indicator.svg";

const Testimonials: React.FC = () => {
  return (
    <section className="flex flex-col items-stretch w-full h-full shadow-lg rounded-lg">
      <TopBar />
      <div className="relative flex-1 border-y border-periwinkle20">
        {/* TODO Implement Spin Animation */}
        <div className="bg-white110 opacity-90">
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={LoadingIndicator}
            alt="Loading"
          />
        </div>
      </div>
      <BottomBar />
    </section>
  );
};

export default Testimonials;
