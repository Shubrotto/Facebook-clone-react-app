import React from "react";
import "./share.css";
import Person from "../../assets/person/person.jpeg";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

const Share = () => {
  return (
    <div className="share">
      <div className="share_wrapper">
        <div className="share_top">
          <img src={Person} alt="" className="share_profile_img" />
          <input
            placeholder="What's in your Mind"
            className="share_input"
            type="text"
          />
        </div>
        <hr className="share_hr" />
        <div className="share_bottom">
          <div className="share_options">
            <div className="share_option">
              <PermMedia htmlColor="tomato" className="share_icon" />
              <span className="share_option_text">Photo or video</span>
            </div>
            <div className="share_option">
              <Label htmlColor="blue" className="share_icon" />
              <span className="share_option_text">Tag</span>
            </div>
            <div className="share_option">
              <Room htmlColor="green" className="share_icon" />
              <span className="share_option_text">Location</span>
            </div>
            <div className="share_option">
              <EmojiEmotions htmlColor="goldenrod" className="share_icon" />
              <span className="share_option_text">Feelings</span>
            </div>
          </div>
          <button className="share_button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
