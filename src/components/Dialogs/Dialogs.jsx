import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import d from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let state = props.dialogsPage;
  
  let dialogsElements = state.dialogs
    .map( d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = state.messages
    .map( m => <Message message={m.message} />)

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange =(e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }
  

  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={d.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea 
                  placeholder='Enter your message'
                  onChange={onNewMessageChange}
                  value={newMessageBody} />
          </div>
          <div><button 
                  onClick={ onSendMessageClick }>
                  Send
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
