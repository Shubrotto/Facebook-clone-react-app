import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircle,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import Atiqur_Friend from "../../assets/person/person3.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_wrapper">
        <ul className="sidebar_list">
          <li className="sidebar_list_item">
            <RssFeed className="sidebar_icon" />
            <span className="sidebar_list_item_text">Feed</span>
          </li>
          <li className="sidebar_list_item">
            <Chat className="sidebar_icon" />
            <span className="sidebar_list_item_text">Chat</span>
          </li>
          <li className="sidebar_list_item">
            <PlayCircle className="sidebar_icon" />
            <span className="sidebar_list_item_text">Video</span>
          </li>
          <li className="sidebar_list_item">
            <Group className="sidebar_icon" />
            <span className="sidebar_list_item_text">Groups</span>
          </li>
          <li className="sidebar_list_item">
            <Bookmark className="sidebar_icon" />
            <span className="sidebar_list_item_text">Bookmarks</span>
          </li>
          <li className="sidebar_list_item">
            <HelpOutline className="sidebar_icon" />
            <span className="sidebar_list_item_text">Questions</span>
          </li>
          <li className="sidebar_list_item">
            <WorkOutline className="sidebar_icon" />
            <span className="sidebar_list_item_text">Job</span>
          </li>
          <li className="sidebar_list_item">
            <Event className="sidebar_icon" />
            <span className="sidebar_list_item_text">Events</span>
          </li>
          <li className="sidebar_list_item">
            <School className="sidebar_icon" />
            <span className="sidebar_list_item_text">Course</span>
          </li>
        </ul>
        <button className="show_button">Show More</button>
        <hr className="sidebar_hr" />
        <ul className="sidebar_friend_list">
          <li className="sidebar_friend">
            <img src={Atiqur_Friend} alt="" className="sidebar_friend_img" />
            <span className="sidebar_friend_name">Atiqur Rahman</span>
          </li>
          <li className="sidebar_friend">
            <img src={Atiqur_Friend} alt="" className="sidebar_friend_img" />
            <span className="sidebar_friend_name">Abu Obaida</span>
          </li>
          <li className="sidebar_friend">
            <img src={Atiqur_Friend} alt="" className="sidebar_friend_img" />
            <span className="sidebar_friend_name">Shawpon Sen</span>
          </li>
          <li className="sidebar_friend">
            <img src={Atiqur_Friend} alt="" className="sidebar_friend_img" />
            <span className="sidebar_friend_name">Ashraful Islam</span>
          </li>
          <li className="sidebar_friend">
            <img src={Atiqur_Friend} alt="" className="sidebar_friend_img" />
            <span className="sidebar_friend_name">Akash Adikary</span>
          </li>
          <li className="sidebar_friend">
            <img src={Atiqur_Friend} alt="" className="sidebar_friend_img" />
            <span className="sidebar_friend_name">Emon Ahmed</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
