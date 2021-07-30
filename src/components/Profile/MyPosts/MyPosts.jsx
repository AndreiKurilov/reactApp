import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {

  let posts = [
    { id: "1", message: "Hi, how are you?", likesCount: 3 },
    { id: "2", message: "It's my first post.", likesCount: 21 }
  ]

  let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount}
  /> )

  return (
    <div className={c.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add</button>
        </div>
      </div>
      <div className={c.posts}>
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
