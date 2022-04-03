import React from "react";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";
import LoadingIndicator from "../../assets/loading-indicator.svg";
import ChevronRight from "../../assets/icons/chevron-right.svg";
import { Testimonials, useTestimonials } from "../../utils/api";
import { formatDate } from "../../utils/date";

interface TestimonialsProps {
  testimonials: Testimonials;
}

// TODO Implement Spin Animation
const Loader: React.FC = () => {
  return (
    <div className="bg-white110 opacity-90">
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        src={LoadingIndicator}
        alt="Loading"
      />
    </div>
  );
};

const TestimonialsList: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <div className="h-full w-full">
      {testimonials.results.map((each, idx) => {
        return (
          <div
            className={`flex items-center pl-6 pr-7 py-3 text-sm hover:bg-periwinkle5 ${
              idx === testimonials.results.length
                ? ""
                : "border-b border-white90"
            }`}
          >
            <div className="flex w-[40vw] justify-start items-center">
              <img
                className="w-8 mr-6"
                src={each.track.icon_url}
                alt={each.track.title}
              />
              <img
                className="w-11 h-11 rounded-full"
                src={each.mentor.avatar_url}
                alt={each.mentor.handle}
              />
              <div className="ml-4">
                <div className="font-medium text-base">
                  {each.mentor.handle}
                </div>
                <div>
                  on {each.exercise.title} in {each.track.title}
                </div>
              </div>
            </div>
            <div className="w-[35vw] text-[15px] text-left truncate">
              {each.content}
            </div>
            <div className="flex-1"></div>
            <div className="mr-[60px]">{formatDate(each.created_at)}</div>
            <img src={ChevronRight} alt="Right Arrow" />
          </div>
        );
      })}
    </div>
  );
};

const TestimonialsContainer: React.FC = () => {
  const { isValidating: isLoading, data } = useTestimonials();

  return (
    <section className="flex flex-col items-stretch w-full h-full shadow-lg rounded-lg">
      <TopBar />
      <div className="relative flex-1 border-y border-periwinkle20">
        {data !== undefined ? (
          <div className="hover:cursor-pointer">
            <TestimonialsList testimonials={data.testimonials} />
          </div>
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Something went wrong :/
          </div>
        )}
        {isLoading && <Loader />}
      </div>
      <BottomBar />
    </section>
  );
};

export default TestimonialsContainer;
