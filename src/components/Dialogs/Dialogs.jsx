import React from 'react'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'

export const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)

    let onSendMessage = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.newMessageChange(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea onChange={onNewMessageChange} value={props.newMessageText}></textarea></div>
                <div><button onClick={onSendMessage}>Send</button></div>
            </div>
        </div>
    )
}