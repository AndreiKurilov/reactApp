import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 3 },
      { id: 2, message: "It's my first post.", likesCount: 21 },
    ]
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Viktor" },
      { id: 6, name: "Valera" }
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo" }
    ]
  }
}

export let addPost = (postMess) => {
  let newPost = { 
    id: 3, 
    message: postMess, 
    likesCount: 0 
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export default state;
