import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/Detail/index.jsx'

import RouterMap from './router/index.js'

// const element = app;

ReactDOM.render(
  // <App/>,
  <RouterMap/>,
  // <h1>Hello, world!</h1>,
  document.getElementById('app')
);