import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {

  let postsElement = props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount}
  /> )

  let newPostElement = React.createRef();
  console.log('newPostElement:', newPostElement)
  
  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text)
  }
  return (
    <div className={c.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add</button>
        </div>
      </div>
      <div className={c.posts}>
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
