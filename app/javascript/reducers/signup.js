import { SETUSER } from '../actions'

const currentUser = (state, action) => {
    console.log(state)
    console.log(action)
    
    switch (action.type) {
        case SETUSER:
            console.log(state)
            if (state == undefined){
                return {
                    username: null,
                    email: null
                }
            }
            return {
                ...state,
                // and update the copy with the new value
                username: action.data.username,
                email: action.data.email
            }
        default:
            if (state == undefined){
                return {
                    username: null,
                    email: null
                }
            }
            return state
    }
}

export default currentUser