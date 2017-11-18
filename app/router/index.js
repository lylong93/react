import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, HashRouter } from 'react-router-dom'

import App from 'W/components'
import Home from 'W/components/Home'
import Find from 'W/components/Find'
import User from 'W/components/User'

import './1.scss'
class routeMap extends React.Component {
    render() {
        return (
            <HashRouter>
              <div>
                <App/>
        
                <Route path="/find" component={Find}/>
                <Route path="/user" component={User}/>
              </div>
            </HashRouter>
        )
    }
}

export default routeMap
