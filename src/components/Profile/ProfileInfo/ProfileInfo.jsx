import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import p from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={p.setSize}>
        <img  className={p.sizeImg}
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt="img"
        ></img>
      </div>
      <div className={p.descriptionBlock}>
        <img src={props.profile.photos.large} alt="photoLarge" />
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
