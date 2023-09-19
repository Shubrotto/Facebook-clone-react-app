import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../posts/Post";
import { Posts } from "../../dummydata";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_wrapper">
        <Share />
        {Posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
