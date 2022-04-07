import React, { useCallback, useEffect, useState } from "react";
import AllTracksIcon from "../../assets/icons/all-tracks.svg";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg";
import SearchIcon from "../../assets/icons/search.svg";

interface FilterSearchProps {
  setFilterQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface TopBarProps extends FilterSearchProps {
  filterQuery: string;
}

const TrackSelector: React.FC = () => {
  return (
    <div className="flex items-center">
      <img className="mr-3" src={AllTracksIcon} alt="All Tracks Icon" />
      <img src={ChevronDownIcon} alt="Chevron" />
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

const TopBar: React.FC<TopBarProps> = ({ filterQuery, setFilterQuery }) => {
  return (
    <div className="flex justify-between items-center w-full px-6 py-4 text-base font-normal">
      <div className="flex justify-center items-center space-x-6">
        <TrackSelector />
        <FilterSearch setFilterQuery={setFilterQuery} />
      </div>
      <div>
        <Sort />
      </div>
    </div>
  );
};

export default TopBar;
