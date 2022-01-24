const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Dimych' },
        { id: 5, name: 'Valery' },
        { id: 6, name: 'Artem' },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Hello' },
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
});

export default dialogsReducer;