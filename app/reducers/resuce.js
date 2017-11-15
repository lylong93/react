import { combinReducers } from 'redux'

// function one(state = 1, action) {
//     if (action.type === 'ADD_TODO') {
//         return state + 1
//     } else {
//         return state
//     }
// }
// 
function counter(state = {
        count: 1
    }, action) {
    const count = state.count
    switch (action.type) {
    case 'increase':
        return {
            count: count + 1
        }
    default:
        return state
    }
}
export default counter