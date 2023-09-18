import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../posts/Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_wrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
