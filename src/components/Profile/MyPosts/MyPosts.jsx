import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {

  let postsElement = props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount}
  /> )

  let newPostElement = React.createRef();
    
  let addingPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div className={c.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={ addingPost }>Add</button>
        </div>
      </div>
      <div className={c.posts}>
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
