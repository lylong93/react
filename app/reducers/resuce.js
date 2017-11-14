import { combinReducers } from 'redux'

function one(state = 1, action) {
    if (action.type === 'ADD_TODO') {
        return state + 1
    } else {
        return state
    }
}
export default one