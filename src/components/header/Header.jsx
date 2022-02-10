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
        src="https://media-exp1.licdn.com/dms/image/C4E1BAQFYockRtvX8UA/company-background_10000/0/1600518810815?e=1644300000&v=beta&t=FQLzeWhi6DajWyPboghrU2oj4PcY_-nZfqzejeYNNgA"
        alt=""
      />
    </div>
  );
}
