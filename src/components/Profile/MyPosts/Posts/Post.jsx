import React from 'react';
import c from'./Post.module.css';

const Post = (props) => {
  return (
    <div className={c.item}>
      {props.message}
      <div>
        <span>
          like
        </span>
        {/* <img className={c.likeIcon}
        src={props.likeImg}
        alt='likeIcon'
        /> */}
        {props.likesCount}
      </div>
    </div>
  )
}

export default Post;
