import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, HashRouter } from 'react-router-dom'
import BottomBar from 'W/components/commons/BottomBar'
import Home from 'W/components/Home'
import Find from 'W/components/Find'
import User from 'W/components/User'
import detal from 'W/components/Find/detal'

import './1.scss'
class routeMap extends React.Component {
    render() {
        return (
            <HashRouter>
              <div>
                <BottomBar/>
        
                <Route path="/find" component={Find}/>
                <Route path="/user" component={User}/>
                <Route path="/detal" component={detal}/>
              </div>
            </HashRouter>
        )
    }
}

export default routeMap
