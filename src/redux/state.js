let rerenderEntireTree = (state) => {
    console.log('State has been changed')
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi! How are you, dude?", likesCount: 12 },
            { id: 2, message: "I'm fine", likeCount: 5 },
        ],
        newPostText: 'Hello, my little friend!'
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
    },
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
