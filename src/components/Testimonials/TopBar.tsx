import React, { useCallback, useEffect, useMemo, useState } from "react";
import AllTracksIcon from "../../assets/icons/all-tracks.svg";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg";
import SearchIcon from "../../assets/icons/search.svg";
import { Track } from "../../utils/api";

interface FilterSearchProps {
  setFilterQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface TrackWithTestimonialCount extends Track {
  testimonialCount?: number;
}

interface TracksSelectorProps {
  tracks?: TrackWithTestimonialCount[];
  selectedTrackSlug?: string;
  setSelectedTrackSlug: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
}

interface TopBarProps extends FilterSearchProps, TracksSelectorProps {}

const TrackSelector: React.FC<TracksSelectorProps> = ({
  tracks,
  selectedTrackSlug,
  setSelectedTrackSlug,
}) => {
  const [open, setOpen] = useState(false);

  const selectedTrack = useMemo(
    () => tracks?.find((each) => each.slug === selectedTrackSlug),
    [selectedTrackSlug, tracks]
  );

  const toggleSelector = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      setOpen(!open);
    },
    [open]
  );

  const onClickOutside = useCallback(() => {
    if (open) {
      setOpen(false);
    }
  }, [open]);

  useEffect(() => {
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [onClickOutside]);

  // console.log(tracks);

  return (
    <div
      onClick={toggleSelector}
      className="flex items-center relative hover:cursor-pointer"
    >
      <img
        className="mr-3 w-[38px]"
        src={selectedTrack ? selectedTrack.icon_url : AllTracksIcon}
        alt={selectedTrack ? selectedTrack.title : "All Tracks"}
      />
      <img src={ChevronDownIcon} alt="Chevron" />
      {open ? (
        <div className="absolute top-full -left-2 translate-y-4 w-[376px] max-h-96 p-2 rounded-lg bg-white shadow-lg z-10 overflow-y-scroll font-medium text-base">
          <div
            key="all"
            onClick={() => {
              setSelectedTrackSlug(undefined);
            }}
            className="flex justify-between items-center py-2 px-6 hover:bg-white100"
          >
            <div className="flex justify-start items-center">
              <div className="flex justify-center items-center mr-6 appearance-none border border-periwinkle80 rounded-full w-5 h-5">
                {selectedTrackSlug === undefined && (
                  <div className="w-[9px] h-[9px] rounded-full bg-periwinkle60"></div>
                )}
              </div>
              <img
                className="w-[38px] mr-[18px]"
                src={AllTracksIcon}
                alt="All Tracks"
              />
              All
            </div>

            <div className="border border-periwinkle10 px-3 py-1 rounded-full text-sm">
              {tracks?.reduce(
                (testimonialCount, currentTrack) =>
                  testimonialCount + (currentTrack.testimonialCount ?? 0),
                0
              )}
            </div>
          </div>
          {tracks?.map((track) => (
            <div
              key={track.slug}
              onClick={() => {
                setSelectedTrackSlug(track.slug);
              }}
              className="flex justify-between items-center py-2 px-6 hover:bg-white100"
            >
              <div className="flex justify-start items-center">
                <div className="flex justify-center items-center mr-6 appearance-none border border-periwinkle80 rounded-full w-5 h-5">
                  {selectedTrackSlug === track.slug && (
                    <div className="w-[9px] h-[9px] rounded-full bg-periwinkle60"></div>
                  )}
                </div>
                <img
                  className="w-[38px] mr-[18px]"
                  src={track.icon_url}
                  alt={track.title}
                />
                {track.title}
              </div>

              <div className="border border-periwinkle10 px-3 py-1 rounded-full text-sm">
                {track.testimonialCount}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const FilterSearch: React.FC<FilterSearchProps> = ({ setFilterQuery }) => {
  const [active, setActive] = useState(false);
  const [query, setQuery] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilterQuery(query);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [query, setFilterQuery]);

  return (
    <div
      className={`flex items-center w-[30vw] py-3 px-5 rounded-[5px] border transition ${
        active
          ? "bg-white border-thristle shadow-glow"
          : "bg-white100 border-white100"
      }`}
    >
      <img src={SearchIcon} alt="Search Icon" />
      <input
        value={query}
        onChange={onChange}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        className={`flex-1 ml-4 placeholder-periwinkle80 focus:outline-none focus:border-none transition ${
          active ? "bg-white" : "bg-white100"
        }`}
        placeholder="Filter by exercise title"
      />
    </div>
  );
};

const Sort: React.FC = () => {
  return (
    <div className="flex items-center w-[25vw] py-3 px-5 bg-white100 rounded-[5px]">
      <p className="flex-1 bg-white100 ml-4 text-periwinkle80">
        Sort by Most Recent
      </p>
      <img className="w-6 h-3" src={ChevronDownIcon} alt="Search Icon" />
    </div>
  );
};

const TopBar: React.FC<TopBarProps> = ({
  tracks,
  selectedTrackSlug,
  setFilterQuery,
  setSelectedTrackSlug,
}) => {
  return (
    <div className="flex justify-between items-center w-full px-6 py-4 text-base font-normal">
      <div className="flex justify-center items-center space-x-6">
        <TrackSelector
          tracks={tracks}
          selectedTrackSlug={selectedTrackSlug}
          setSelectedTrackSlug={setSelectedTrackSlug}
        />
        <FilterSearch setFilterQuery={setFilterQuery} />
      </div>
      <div>
        <Sort />
      </div>
    </div>
  );
};

export default TopBar;
