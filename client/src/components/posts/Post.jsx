import React, { useState } from "react";
import "./post.css";

import Like from "../../assets/like.png";
import Heart from "../../assets/love.png";
import { MoreVert } from "@mui/icons-material";

import { Users } from "../../dummydata";

const Post = ({ post }) => {
  const { desc, photo, like, date, comment } = post;
  const [likeCount, setLikeCount] = useState(like);
  const [isliked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLikeCount(isliked ? likeCount - 1 : likeCount + 1);
    setIsLiked(!isliked);
  };
  return (
    <div className="post">
      <div className="post_wrapper">
        <div className="post_top">
          <div className="post_top_left">
            <img
              className={"post_img"}
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt=""
            />
            <span className="post_username">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="post_date">{date}</span>
          </div>
          <div className="post_top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post_center">
          <span className="post_text">{desc}</span>
          <img className="post_center_img" src={photo} alt="" />
        </div>
        <div className="post_bottom">
          <div className="post_bottom_left">
            <img
              className="post_like"
              onClick={likeHandler}
              src={Like}
              alt=""
            />
            <img
              className="post_like"
              onClick={likeHandler}
              src={Heart}
              alt=""
            />
            <span className="post_like_counter">
              {likeCount} People Reacted it
            </span>
          </div>
          <div className="post_bottom_right">
            <span className="post_comment">{comment} comment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
