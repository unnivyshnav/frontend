import { useState, useEffect } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT BLOG</span>
        <img
          src="https://i.ibb.co/M1tWc2t/becomeamernstackdeveloper-mobile.png"
          alt=""
        />
        <p className="sidedesc">
          A Blog Application using the MERN stack where a user with valid
          credentials only can see the Blogs. Upon successful login, a normal
          user can view all the Blogs. An Admin user should be able to do all
          the CRUD operations on the Blog, such as Read, Create, Update & Delete
          any Blogs from the UI.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <li className="sidebarListItem">
              <Link className="link" to="/posts?cat=Life">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
