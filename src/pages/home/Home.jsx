import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import axios from "axios";
import { Context } from "../../context/Context";
// import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(Context);
  // const location = useLocation;
  // console.log(location);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://myblogapion.herokuapp.com/api/posts",
        {
          headers: { token: "Bearer " + user.accessToken },
        }
      );
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  if (user) {
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
  return (
    <div className="warning">
      <h1>Login To See Posts😊</h1>
    </div>
  );
}
