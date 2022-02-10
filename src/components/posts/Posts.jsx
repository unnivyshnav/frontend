import React from "react";
import Post from "../post/Post";
import "./Posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p, key) => (
        <Post key={key} post={p} />
      ))}
    </div>
  );
}
