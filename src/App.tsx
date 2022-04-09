import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TestimonialsBorderIcon from "./assets/icons/testimonials-border.svg";
import TestimonialsInnerIcon from "./assets/icons/testimonials-inner.svg";
import Squiggle from "./assets/icons/squiggle.svg";
import Testimonials from "./components/Testimonials";
import { useTestimonials } from "./utils/api";

// TODO Semantic Tags

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterQuery, setFilterQuery] = useState<string>("");
  const [selectedTrackSlug, setSelectedTrackSlug] = useState<string>();
  const [order, setOrder] = useState<"newest_first" | "oldest_first">(
    "newest_first"
  );

  const {
    isValidating: areTestimonialsLoading,
    data: testimonialsData,
    error: testimonialsError,
  } = useTestimonials({
    page: currentPage,
    exercise: filterQuery ? filterQuery : undefined,
    track: selectedTrackSlug,
    order,
  });

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
        {testimonialsData && (
          <div className="border border-periwinkle10 px-3 py-1 rounded-full font-medium text-sm ml-4">
            {testimonialsData.testimonials.pagination.total_count}
          </div>
        )}
      </div>
      <img className="mt-5 mb-9" src={Squiggle} alt="Squiggle Line" />
      <div className="flex-1 w-full px-8 pb-10">
        <Testimonials
          areTestimonialsLoading={areTestimonialsLoading}
          currentPage={currentPage}
          selectedTrackSlug={selectedTrackSlug}
          setCurrentPage={setCurrentPage}
          setSelectedTrackSlug={(slug?: string) => {
            setCurrentPage(1);
            setSelectedTrackSlug(slug);
          }}
          setFilterQuery={(filter: string) => {
            if (filter !== filterQuery) {
              setCurrentPage(1);
              setFilterQuery(filter);
            }
          }}
          order={order}
          setOrder={setOrder}
          testimonialsData={testimonialsData}
          testimonialsError={testimonialsError}
        />
      </div>
    </div>
  );
}

export default App;
