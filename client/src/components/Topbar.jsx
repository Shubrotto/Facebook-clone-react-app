import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import Profile from "../assets/person/Profilepic.jpg";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar_cotainer">
      <div className="topbar_left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Facebook</span>
        </Link>
      </div>
      <div className="topbar_center">
        <div className="searchbar">
          <Search className="search_icon" />
          <input
            placeholder="Search for friend, group, pages and video"
            type="text"
            className="search_input"
          />
        </div>
      </div>
      <div className="topbar_right">
        <div className="topbar_links">
          <span className="topbar_link">Home</span>
          <span className="topbar_link">Timeline</span>
        </div>
        <div className="topbar_Icons">
          <div className="topbar_Icon_Item">
            <Person />
            <span className="topbar_Icons_Badge">1</span>
          </div>
          <div className="topbar_Icon_Item">
            <Chat />
            <span className="topbar_Icons_Badge">1</span>
          </div>
          <div className="topbar_Icon_Item">
            <Notifications />
            <span className="topbar_Icons_Badge">1</span>
          </div>
        </div>
        <img src={Profile} alt="" className="topbar_image" />
      </div>
    </div>
  );
};

export default Topbar;
