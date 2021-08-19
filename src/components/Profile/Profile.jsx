import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import p from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import store from './../../redux/redux-store';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
