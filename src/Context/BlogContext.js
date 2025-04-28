// BlogContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/blogs/view`
      );
      setBlogs(response?.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
  );
};
export const useBlogs = () => useContext(BlogContext);
