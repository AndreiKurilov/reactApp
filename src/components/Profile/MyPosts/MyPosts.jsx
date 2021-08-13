import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import c from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}
  /> )

  let newPostElement = React.createRef();
    
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action);
  }

  let addingPost = () => {
    props.dispatch(addPostActionCreator());
  }

  return (
    <div className={c.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} 
            ref={newPostElement} 
            value={props.newPostText} />
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
