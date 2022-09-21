import { CHANGE_USER_NAME } from "../actionCreators/profile";

const initialState = {
    userName: "Mike",
    age: 19
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_USER_NAME:{
            return{
                ...state,
                userName:action.payload
            }
        }
        default:
            return state
        
    }
}

export default profileReducer