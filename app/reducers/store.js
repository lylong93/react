import React from 'React'
import { createStore } from 'redux'
import resuce from './resuce'

const store = createStore(
    resuce,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)
export default store;