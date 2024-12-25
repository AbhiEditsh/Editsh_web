// BlogContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Create a context
const BlogContext = createContext();

// Create a provider component
export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://editsh-back-anft.onrender.com/api/blogs/view");
      setBlogs(response?.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs }}>
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook to use the BlogContext
export const useBlogs = () => useContext(BlogContext);
