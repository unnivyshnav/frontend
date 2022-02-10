import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImage"
        src="https://i.ibb.co/ZJH9Qxb/pexels-pixabay-414102.jpghttps://i.ibb.co/ZJH9Qxb/pexels-pixabay-414102.jpg"
        alt=""
      />
    </div>
  );
}
