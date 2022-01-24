import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newMessageChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);