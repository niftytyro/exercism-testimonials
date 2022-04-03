import React from "react";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";

const BottomBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full px-8 py-4 text-sm font-medium">
      <button
        disabled
        className="disabled:bg-white80 disabled:text-periwinkle90 disabled:shadow-none shadow-sm py-2 px-4 rounded-[5px]"
      >
        <img
          className="inline w-3 h-[10px] mr-[10px]"
          src={ArrowLeft}
          alt="Arrow"
        />
        Previous
      </button>

      <div className="flex justify-center items-center space-x-3 text-periwinkle80">
        <div className="px-4 py-2 rounded-[5px] border border-white60">1</div>
        <div className="px-4 py-2 rounded-[5px] border border-periwinkle90 text-periwinkle100 bg-periwinkle">
          2
        </div>
        <div className="px-4 py-2 rounded-[5px] border border-white60">3</div>
        <div className="px-3">...</div>
        <div className="px-4 py-2 rounded-[5px] border border-white60">32</div>
        <div className="px-4 py-2 rounded-[5px] border border-white60">33</div>
        <div className="px-4 py-2 rounded-[5px] border border-white60">34</div>
      </div>

      <button className="disabled:bg-white80 disabled:text-periwinkle90 shadow-sm py-2 px-4 rounded-[5px]">
        Next
        <img
          className="inline w-3 h-[10px] ml-[10px]"
          src={ArrowRight}
          alt="Arrow"
        />
      </button>
    </div>
  );
};

export default BottomBar;
