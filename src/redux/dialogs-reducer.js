const SEND_MESSAGE = 'SEND_MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newMessageText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state;
    }
};

export const sendMessageActionCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText });

export default dialogsReducer;
