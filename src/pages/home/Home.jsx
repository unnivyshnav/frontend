import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import axios from "axios";
// import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  // const location = useLocation;
  // console.log(location);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://myblogapion.herokuapp.com/api/posts"
      );
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
