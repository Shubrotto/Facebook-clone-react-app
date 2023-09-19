import React from "react";
import Add from "../../assets/ad.jpg";
import { Users } from "../../dummydata";

const OnlineAdd = () => {
  return (
    <div>
      <img className="rightbar_add_img" src={Add} alt="" />
      <h4 className="rightbar_title">Online Friends</h4>
      <ul className="rightbar_friend_list">
        {Users.map((user) => {
          return (
            <li key={user.id} className="rightbar_friend">
              <div className="rightbar_profile_img_container">
                <img
                  className="rightbar_profile_img"
                  src={user.profilePicture}
                  alt=""
                />
                <span className="right_online"></span>
              </div>
              <span className="right_online_username">{user.username}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OnlineAdd;
