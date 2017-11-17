import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './reducers/store'
import RouterMap from './router'

import 'W/public/css/reset.scss'

ReactDOM.render(
    <Provider store={store}>
        <RouterMap/>
    </Provider>,
    document.getElementById('app')
);