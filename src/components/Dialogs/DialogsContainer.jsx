import React from 'react'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import StoreContext from '../../StoreContext';
import { Dialogs } from './Dialogs'

export const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer> 
            {
            (store) => {
                let state = store.getState();
                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator())
                }
                let newMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }

                return (
                    <Dialogs
                        sendMessage={sendMessage}
                        newMessageChange={newMessageChange}
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}
                        newMessageText={state.dialogsPage.newMessageText}
                    />

                )
            }
        }
        </StoreContext.Consumer>
    )
}