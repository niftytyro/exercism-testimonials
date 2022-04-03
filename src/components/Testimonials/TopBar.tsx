import React from "react";
import AllTracksIcon from "../../assets/icons/all-tracks.svg";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg";
import SearchIcon from "../../assets/icons/search.svg";

const TrackSelector: React.FC = () => {
  return (
    <div className="flex items-center">
      <img className="mr-3" src={AllTracksIcon} alt="All Tracks Icon" />
      <img src={ChevronDownIcon} alt="Chevron" />
    </div>
  );
};

const FilterSearch: React.FC = () => {
  return (
    <div className="flex items-center w-[30vw] py-3 px-5 bg-white100 rounded-[5px]">
      <img src={SearchIcon} alt="Search Icon" />
      <input
        className="flex-1 bg-white100 ml-4 placeholder-periwinkle80"
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

const TopBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full px-6 py-4 text-base font-normal">
      <div className="flex justify-center items-center space-x-6">
        <TrackSelector />
        <FilterSearch />
      </div>
      <div>
        <Sort />
      </div>
    </div>
  );
};

export default TopBar;
