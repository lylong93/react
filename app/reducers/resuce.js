import { combineReducers } from 'redux'
import { to, CITY } from './userinfo.js'

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
function city(state = {
        city: '包头'
    }, action) {
    switch (action.type) {
    case CITY.CHANGE:
        return action.city
    default:
        return state.city
    }
}
const test = combineReducers({
    counter,
    city
})
export default test