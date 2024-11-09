"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="boder-[1px] w-full md:w-auto py-2 shadow-sm rounded-full hover:shadow-md transition cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>

        <div className="hidden md:block text-sm font-semibold border-x-[1px] px-6 flex-1 text-center">
          Anyweek
        </div>

        <div className="text-sm pl-6 pr-2 text-gray-600 rounded-full cursor-pointer flex items-center gap-3">
          <div className="hidden md:block">Add Guests</div>

          <div className="p-2 md:px-2 md:py-1 rounded-full text-white bg-rose-500">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
