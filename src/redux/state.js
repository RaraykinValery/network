import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi! How are you, dude?", likesCount: 12 },
                { id: 2, message: "I'm fine", likeCount: 5 },
            ],
            newPostText: "Hello, my little friend!",
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Sasha" },
                { id: 3, name: "Sveta" },
                { id: 4, name: "Dimych" },
                { id: 5, name: "Valery" },
                { id: 6, name: "Artem" },
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Hello" },
            ],
            newMessageText: "",
        },
        sidebar: {},
    },

    _callSubscriber() {
        console.log("State has been changed");
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer( this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;
