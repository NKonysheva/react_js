import {ADD_CHAT, DELETE_CHAT} from "../../store/actionCreators/chats";

const initialState = {
    chats: [
        {id: 'chat1', name: 'David'},
        {id: 'chat2', name: 'Viktoria'},
        {id: 'chat3', name: 'Tomas'},
        {id: 'chat4', name: 'Itan'},
        {id: 'chat5', name: 'Mari'},
    ]
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                chats: [...state.chats, {id: action.id, name: action.name,
                avatar: action.avatar}]
            }
        }
        case DELETE_CHAT: {
            return {
                ...state,
                chats: state.chats.filter(chat => chat.id !== action.id)
            }
        }
        default:
            return state
    }
}
