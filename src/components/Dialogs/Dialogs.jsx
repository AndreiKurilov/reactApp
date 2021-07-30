import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import d from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = () => {
  
  let dialogs = [
    { id: "1", name: "Dimych" },
    { id: "2", name: "Andrey" },
    { id: "3", name: "Sveta" },
    { id: "4", name: "Sasha" },
    { id: "5", name: "Viktor" },
    { id: "6", name: "Valera" },
  ]

  let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />)

  let messages = [
    { id: "1", message: "Hi" },
    { id: "2", message: "How are you?" },
    { id: "3", message: "Yo" },
    { id: "4", message: "Yo" },
    { id: "5", message: "Yo" }
  ]

  let messagesElements = messages.map( m => <Message message={m.message} />)

  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={d.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
