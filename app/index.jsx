import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/Detail/index.jsx'
import store from './reducers/store.js'

import RouterMap from './router/index.js'


ReactDOM.render(
    // <App/>,
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);