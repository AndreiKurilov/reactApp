import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import d from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  
  let dialogsElements = props.state.dialogs
                        .map( d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = props.state.messages
                        .map( m => <Message message={m.message} />)

  let messageRef = React.createRef();

  let addMessage = () => {
    let textMessage = messageRef.current.value;
    alert(textMessage);
  }

  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={d.messages}>
        {messagesElements}
        <textarea ref={messageRef}></textarea>
        <div>
          <button onClick={ addMessage }>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
