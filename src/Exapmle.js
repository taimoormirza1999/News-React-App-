import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./components/Card";
function Exapmle() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios
          .get(
            "https://newsapi.org/v2/everything?q=technology&apiKey=59efa68560634aceb13d63bb3da71c4f"
          )
          .then((response) => {
       setBlogs(response.data.articles)
       
          })
          .catch((error) => console.log(error));
      }, []);
  return (
    blogs.map((blog,index)=>(
<>
      
      <Card title={blog.title} description={blog.description} id={index}  handleDelete={""} Link={Link}/>

</>
     ))     
  )
}

export default Exapmle