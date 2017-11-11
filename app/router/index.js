import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from '.././containers/Home/index.jsx'
import detail from '.././containers/Detail/index.jsx'

const routeMap = () => (
    <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/detail">detail</Link></li>
      </ul>
      <Route path="/" component= {Home}/>
      <Route path="/detail" component={detail}/>
    </div>
  </Router>
)

export default routeMap
