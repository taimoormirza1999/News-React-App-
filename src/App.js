import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import BlogList from "./components/BlogList";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NoPage from "./components/NoPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";

function App() {
  // ---------------------------------------
  // ---------------------------------------
  // ---------------------------------------
  const [blogs, setBlogs] = useState([]);
  const [dropdownStatus,setDropdownStatus]=useState([null])
  const [newstitle,setNewsTitle] = useState("technology");
  const [data, setData] = useState("false");
  const [filteredData, setfilteredData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${newstitle}&apiKey=59efa68560634aceb13d63bb3da71c4f`
        )
      .then((response) => {
        setBlogs(response.data.articles);
        setfilteredData(response.data.articles);
        setData("true");
        // console.log(response.data.articles)
      })
      .catch((error) => console.log(error));
  }, [ [newstitle]]);

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}/`)
      .then(() => setBlogs(blogs.filter((blog) => blog.id !== id)))
      .catch((error) => console.log(error));
  };
  const handleCategoryChange=(e)=>{
    setNewsTitle(e.target.value);
  }

const handleDropDown=()=>{
  setDropdownStatus(dropdownStatus===null?true:false);
}
  const handleSearch = (e) => {
    let keyword = e.target.value.toLowerCase();
    setSearchKeyword(keyword);
    let arr = [];
    arr = blogs.filter((blogs) => blogs.title.toLowerCase().includes(keyword));
    setfilteredData(arr);
  };
  // ---------------------------------------
  // ---------------------------------------
  // ---------------------------------------

  return (
    <Router>
      <Navbar setNewsTitle={setNewsTitle} />
      <div className="mx-auto container my-5 ">
        <Routes>
          <Route
            path="/"
            exact  
            element={
              <BlogList
              dropdownStatus={dropdownStatus}
              handleDropDown={handleDropDown}
              handleCategoryChange={handleCategoryChange}
              blogs={blogs}
              newstitle={newstitle}
              setBlogs={setBlogs}
              filteredData={filteredData}
              handleSearch={handleSearch}
              handleDelete={handleDelete}
              data={data}
              />
            }
          />
            <Route path="*" element={<NoPage />} />
            <Route path="login" element={<Auth />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
