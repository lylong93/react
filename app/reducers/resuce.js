import { combinReducers } from 'redux'
import action from './userinfo.js'
//规则
function counter(state = {
        count: 1
    }, action) {
    const count = state.count
    switch (action.type) {
    case 'increase':
        return {
            count: count + 1
        }
    case 'test':
        console.log('test执行')
        return {
            count: count + 1
        }
    default:
        return state
    }
}
export default counter