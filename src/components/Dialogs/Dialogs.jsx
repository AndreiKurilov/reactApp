import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import d from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  
  let dialogsElements = props.dialogsPage.dialogs
    .map( d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = props.dialogsPage.messages
    .map( m => <Message message={m.message} />)

  let messageRef = React.createRef();

  let onMessageChange =() => {
    let text = messageRef.current.value;
    props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
  }
  
  let addingMessage = () => {
    props.dispatch({type: 'ADD-MESSAGE'});
  }


  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={d.messages}>
        {messagesElements}
        <textarea onChange={onMessageChange}
          ref={messageRef}
          value={props.dialogsPage.newMessageText} />
        <div>
          <button onClick={ addingMessage }>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
