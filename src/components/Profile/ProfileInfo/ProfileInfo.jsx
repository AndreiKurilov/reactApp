import React from "react";
import p from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img  className={p.sizeImg}
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt="img"
        ></img>
      </div>
      <div className={p.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
