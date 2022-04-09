import React, { useEffect, useState } from "react";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";
import LoadingIndicator from "../../assets/loading-indicator.svg";
import ChevronRight from "../../assets/icons/chevron-right.svg";
import {
  TestimonialResult,
  Testimonials,
  TestimonialsResponse,
  useTracks,
} from "../../utils/api";
import { formatDate } from "../../utils/date";

interface TestimonialListProps {
  testimonials?: Testimonials;
}

interface TestimonialListItemProps {
  testimonial: TestimonialResult;
  isLast: boolean;
}

interface TestimonialsContainerProps {
  areTestimonialsLoading: boolean;
  testimonialsData?: TestimonialsResponse;
  testimonialsError: any;
  currentPage: number;
  filterQuery: string;
  selectedTrackSlug?: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setFilterQuery: React.Dispatch<React.SetStateAction<string>>;
  setSelectedTrackSlug: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
}

// TODO Implement Spin Animation
const Loader: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white110 opacity-90">
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        src={LoadingIndicator}
        alt="Loading"
      />
    </div>
  );
};

const TestimonialListItem: React.FC<TestimonialListItemProps> = ({
  testimonial,
  isLast,
}) => {
  return (
    <div
      className={`flex items-center pl-6 pr-7 py-3 text-sm hover:bg-periwinkle5 ${
        isLast ? "" : "border-b border-white90"
      }`}
    >
      <div className="flex w-[40vw] justify-start items-center">
        <img
          className="w-8 mr-6"
          src={testimonial.track.icon_url}
          alt={testimonial.track.title}
        />
        <img
          className="w-11 h-11 rounded-full"
          src={testimonial.mentor.avatar_url}
          alt={testimonial.mentor.handle}
        />
        <div className="ml-4">
          <div className="font-medium text-base">
            {testimonial.mentor.handle}
          </div>
          <div>
            on {testimonial.exercise.title} in {testimonial.track.title}
          </div>
        </div>
      </div>
      <div className="w-[35vw] text-[15px] text-left truncate">
        {testimonial.content}
      </div>
      <div className="flex-1"></div>
      <div className="mr-[60px]">{formatDate(testimonial.created_at)}</div>
      <img src={ChevronRight} alt="Right Arrow" />
    </div>
  );
};

const TestimonialsList: React.FC<TestimonialListProps> = ({ testimonials }) => {
  return (
    <div className="h-full w-full">
      {testimonials?.results.length ? (
        testimonials.results.map((each, idx) => (
          <TestimonialListItem
            key={each.id}
            isLast={idx === testimonials.results.length - 1}
            testimonial={each}
          />
        ))
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Couldn't find any exercises. Try another query.
        </div>
      )}
    </div>
  );
};

const TestimonialsContainer: React.FC<TestimonialsContainerProps> = ({
  areTestimonialsLoading,
  testimonialsData,
  testimonialsError,
  currentPage,
  selectedTrackSlug,
  setSelectedTrackSlug,
  setCurrentPage,
  setFilterQuery,
}) => {
  const [testimonials, setTestimonials] = useState<Testimonials>();

  const { data: tracksData } = useTracks();

  useEffect(() => {
    if (testimonialsData?.testimonials) {
      setTestimonials(testimonialsData.testimonials);
    }
  }, [testimonialsData?.testimonials]);

  return (
    <section className="flex flex-col items-stretch w-full h-full shadow-lg rounded-lg">
      <TopBar
        setFilterQuery={setFilterQuery}
        tracks={(tracksData?.tracks ?? []).map((track) => {
          return {
            ...track,
            testimonialCount: testimonials?.track_counts[track.slug] ?? 0,
          };
        })}
        selectedTrackSlug={selectedTrackSlug}
        setSelectedTrackSlug={setSelectedTrackSlug}
      />
      <div className="relative flex-1 border-y border-periwinkle20">
        {testimonialsError && !areTestimonialsLoading ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Something went wrong :/
          </div>
        ) : (
          <div className="hover:cursor-pointer">
            <TestimonialsList testimonials={testimonials} />
          </div>
        )}
        {areTestimonialsLoading && <Loader />}
      </div>
      <BottomBar
        totalPages={testimonialsData?.testimonials.pagination.total_pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default TestimonialsContainer;
