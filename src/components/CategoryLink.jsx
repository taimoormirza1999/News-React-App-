import React from 'react'
import { useState } from "react";
function CategoryLink({title,setNewsTitle}) {
    const handleCategorylink=(e)=>{
        // setNewsTitle(title);
        alert("f"+e)
      }
  return (
    <><div
    className="text-gray-300 ccapitalize cursor-pointer hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  onClick={handleCategorylink("e")}
  >
    {title}
  </div></>
  )
}

export default CategoryLink