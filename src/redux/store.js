import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";
import sidebarReduser from "./sidebar-reduser";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 3 },
        { id: 2, message: "It's my first post.", likesCount: 21 },
      ],
      newPostText: 'abcde'
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
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log("State changed") 
  },
  
  getState () {
    return this._state;
  },
  
  subscribe (observer) {
    this._callSubscriber = observer;
  },
  
  dispatch(action) {

    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReduser(this._state.sidebar, action);

    this._callSubscriber(this._state);
  } 
}

export default store;