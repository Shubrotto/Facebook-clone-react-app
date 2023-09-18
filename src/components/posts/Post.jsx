import React from "react";
import "./post.css";
import Person2 from "../../assets/person/person2.jpg";

import PostImg from "../../assets/posts/post2.jpg";
import Like from "../../assets/like.png";
import Heart from "../../assets/love.png";
import { MoreVert } from "@mui/icons-material";

const Post = () => {
  return (
    <div className="post">
      <div className="post_wrapper">
        <div className="post_top">
          <div className="post_top_left">
            <img className="post_img" src={Person2} alt="" />
            <span className="post_username">Abu Obaida</span>
            <span className="post_date">10 mintues ago</span>
          </div>
          <div className="post_top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post_center">
          <span className="post_text">Hey! It's my first post:</span>
          <img className="post_center_img" src={PostImg} alt="" />
        </div>
        <div className="post_bottom">
          <div className="post_bottom_left">
            <img className="post_like" src={Like} alt="" />
            <img className="post_like" src={Heart} alt="" />
            <span className="post_like_counter">30 People Reacted it</span>
          </div>
          <div className="post_bottom_right">
            <span className="post_comment">10 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
