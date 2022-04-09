import qs from "qs";
import useSWR from "swr";
import { BASE_API_URL } from "./constants";

export interface TestimonialResult {
  content: string;
  created_at: string;
  exercise: {
    icon_url: string;
    slug: string;
    title: string;
  };
  id: number;
  mentor: {
    avatar_url: string;
    handle: string;
  };
  track: {
    icon_url: string;
    slug: string;
    title: string;
  };
}

export interface Testimonials {
  results: TestimonialResult[];
  pagination: {
    current_page: number;
    total_count: number;
    total_pages: number;
  };
  track_counts: {
    [key: string]: number;
  };
  tracks: string[];
}

export interface Track {
  course: boolean;
  icon_url: string;
  is_new: boolean;
  links: {
    concepts: string;
    exercises: string;
    self: string;
  };
  num_concepts: number;
  num_exercises: number;
  slug: string;
  tags: string[];
  title: string;
  web_url: string;
}

export interface TestimonialsResponse {
  testimonials: Testimonials;
}

export interface TracksResponse {
  tracks: Track[];
}

export const fetcher = (endpoint: string) => {
  const url = BASE_API_URL + endpoint;
  return fetch(url).then((res) => res.json());
};

export const useTestimonials = ({
  page,
  exercise,
  track,
}: {
  page?: number;
  exercise?: string;
  track?: string;
}) => {
  return useSWR<TestimonialsResponse>(
    `/hiring/testimonials?${qs.stringify({ page, exercise, track })}`,
    fetcher
  );
};

export const useTracks = () => {
  return useSWR<TracksResponse>("/tracks", fetcher);
};
