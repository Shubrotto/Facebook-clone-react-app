import React from "react";
import "./style.css";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="body_home_container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
