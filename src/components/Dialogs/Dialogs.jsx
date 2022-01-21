import React from 'react'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'

export const Dialogs = (props) => {
    let state = props.store.getState();

    let dialogsElements = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />)

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea onChange={onNewMessageChange} value={state.newMessageText}></textarea></div>
                <div><button onClick={sendMessage}>Send</button></div>
            </div>
        </div>
    )
}