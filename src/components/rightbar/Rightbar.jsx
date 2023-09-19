import React from "react";
import "./rightbar.css";
import BirthImg from "../../assets/gift.png";
import Person from "../../assets/person/person.jpeg";
import OnlineAdd from "./OnlineAdd";

const Rightbar = ({ profile }) => {
  const HomeBar = () => {
    return (
      <>
        <div className="birthdday_container">
          <img className="Birthday_img" src={BirthImg} alt="" />
          <span className="birthday_text">
            <b>Atiqur Rahman </b> and <b>3 Other friend</b> have a birthday
            today
          </span>
        </div>
        <OnlineAdd />
      </>
    );
  };

  const ProfileBar = () => {
    return (
      <>
        <h4 className="rightbar_title">User information</h4>
        <div className="rightbar_info">
          <div className="right_info_item">
            <span className="rightbar_info_key">City: </span>
            <span className="rightbar_info_value">Dhaka, Bangldesh</span>
          </div>
          <div className="right_info_item">
            <span className="rightbar_info_key">From: </span>
            <span className="rightbar_info_value">Pabna, Bangldesh</span>
          </div>
          <div className="right_info_item">
            <span className="rightbar_info_key">Relationship: </span>
            <span className="rightbar_info_value">Single</span>
          </div>
        </div>
        <h4 className="rightbar_title">User friends</h4>
        <div className="rightbar_followings">
          <div className="rightbar_following">
            <img className="rightbar_following_user" src={Person} alt="" />
            <span className="rightbar_following_username">Kate daniel</span>
          </div>
          <div className="rightbar_following">
            <img className="rightbar_following_user" src={Person} alt="" />
            <span className="rightbar_following_username">Kate daniel</span>
          </div>
          <div className="rightbar_following">
            <img className="rightbar_following_user" src={Person} alt="" />
            <span className="rightbar_following_username">Kate daniel</span>
          </div>
          <div className="rightbar_following">
            <img className="rightbar_following_user" src={Person} alt="" />
            <span className="rightbar_following_username">Kate daniel</span>
          </div>
          <div className="rightbar_following">
            <img className="rightbar_following_user" src={Person} alt="" />
            <span className="rightbar_following_username">Kate daniel</span>
          </div>
          <div className="rightbar_following">
            <img className="rightbar_following_user" src={Person} alt="" />
            <span className="rightbar_following_username">Kate daniel</span>
          </div>
        </div>
        <OnlineAdd />
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbar_wrapper">
        <ProfileBar />
      </div>
    </div>
  );
};

export default Rightbar;
