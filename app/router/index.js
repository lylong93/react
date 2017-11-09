import React from 'react'
import {Router, Route, Link} from 'react-router'

import home from '.././containers/Detail/index.jsx'
import detail from '.././containers/Detail/index.jsx'

class RouterMap extends React.Component {
    render() {
        return (
            <Router>
              <Route path="/" component={home}>
                <Route path="about" component={detail} />
              </Route>
            </Router>
            )
    }
}

export default RouterMap
