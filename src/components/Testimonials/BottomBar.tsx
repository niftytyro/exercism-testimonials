import React, { useMemo } from "react";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import { generateKey } from "../../utils/key";

export interface BottomBarProps {
  currentPage: number;
  totalPages?: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const BottomBar: React.FC<BottomBarProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const pagesArray = useMemo(() => {
    if (totalPages && currentPage) {
      const array: (number | null)[] = (
        currentPage > 3
          ? Array.from(Array(5).keys()).map(
              (_, index) => currentPage + index - 2
            )
          : Array.from(Array(currentPage + 2).keys()).map(
              (_, index) => index + 1
            )
      ).filter((page) => page === null || page <= totalPages);

      if (array[0] && array[0] > 1) {
        if (array[0] > 2) {
          array.splice(0, 0, null);
        }
        array.splice(0, 0, 1);
      }

      if (currentPage < totalPages - 2) {
        array.push(null);
        array.push(totalPages);
      }
      return array;
    }
    return [];
  }, [currentPage, totalPages]);

  return (
    <div className="flex justify-between items-center w-full px-8 py-4 text-sm font-medium">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="disabled:bg-white80 disabled:text-periwinkle90 disabled:shadow-none shadow-sm py-2 px-4 rounded-[5px]"
      >
        <img className="inline w-3 h-2.5 mr-2.5" src={ArrowLeft} alt="Arrow" />
        Previous
      </button>

      {currentPage ? (
        <div className="flex justify-center items-center space-x-3 text-periwinkle80">
          {pagesArray.map((index) =>
            index === null ? (
              <div key={generateKey()} className="px-3">
                ...
              </div>
            ) : (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`px-4 py-2 rounded-[5px] border hover:cursor-pointer active:border-none active:outline-none ${
                  currentPage === index
                    ? "border-periwinkle90 text-periwinkle100 bg-periwinkle"
                    : "border-white60"
                }`}
              >
                {index}
              </button>
            )
          )}
        </div>
      ) : null}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="disabled:bg-white80 disabled:text-periwinkle90 shadow-sm py-2 px-4 rounded-[5px]"
      >
        Next
        <img className="inline w-3 h-2.5 ml-2.5" src={ArrowRight} alt="Arrow" />
      </button>
    </div>
  );
};

export default BottomBar;
