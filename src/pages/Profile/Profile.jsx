import React from "react";
import "./profile.css";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import CoverImg from "../../assets/posts/post.jpg";
import ProfileImg from "../../assets/person/person.jpeg";

const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile_right">
          <div className="profile_right_top">
            <img className="profile_cover_img" src={CoverImg} alt="" />
            <img className="profile_user_img" src={ProfileImg} alt="" />
            <div className="profile_username">
              <h2>Jane Lia</h2> <span>(Janiet)</span>
            </div>
            <span className="profile_info_text">Welcome to World!</span>
          </div>
          <div className="profile_right_bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
