import React from "react";
import SearchBox from "./SearchBox";
import BlogListCard from "./BlogListCard";
import Heading from "./Heading";
import Text from "./Text";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import Topheadlines from "./Topheadlines";
export default function BlogList({
  filteredData,
  handleSearch,
  searchKeyword,
  data,
  newstitle,
  handleCategoryChange,
  handleDropDown,dropdownStatus,
}) {
  const itemsPerPage = 9;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* Serach Box  */}
      <SearchBox searchHandle={handleSearch} searchKeyword={searchKeyword} />

      {/* Map Results */}
    
      <div className="w-11/12 mx-auto mt-6">
        <div className="flex justify-between">
          <Heading text={newstitle} />{" "}
         
          <select className="cursor-pointer relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none" value={newstitle}  onChange={handleCategoryChange}>
<option className="p-2" value="general">General</option>
<option value="business">Business</option>
<option value="health">Health</option>
<option value="science">Science</option>
<option value="sports">Sports</option>
<option value="technology">Technology</option>
</select> 
      
      </div>
      
        <div className=" my-5 ">
          {data === "true" ? (
            <>
              {currentItems.length === 0 && (
                <Text size="sm" text="Sorry No results found!" />
              )}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto pb-3">
                <BlogListCard filteredData={currentItems} />
              </div>

              <ReactPaginate
                className="text-white flex p-5 gap-1 mx-auto my-5 justify-center"
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                pageLinkClassName=" p-3 m-1 border b-2 rounded-md"
                previousLabel="Previous"
                renderOnZeroPageCount={null}
                activeLinkClassName={"bg-slate-500"}
                previousLinkClassName="border b-2 rounded-md  px-3 py-2 mx-2 font-bold"
                nextLinkClassName="border b-2 rounded-md px-3 py-2 mx-2 font-bold"
                disabledLinkClassName="bg-slate-100 text-slate-900 "
              />
            </>
          ) : (
            <Text size="sm" text="Loading..." />
          )}{" "}
        </div>
      </div>
    </>
  );
}
