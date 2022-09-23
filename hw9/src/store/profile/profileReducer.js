import { CHANGE_NAME } from "./action";

const initialState = {
    name: "Mike",
    age: 19
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_NAME:{
            return{
                ...state,
                name: action.payload.name,
            }
        }
        default:
            return state
        
    }
}

export default profileReducer