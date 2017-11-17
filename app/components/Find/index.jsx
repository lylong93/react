import React from 'React'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import fetch from 'W/fetch'

class Find extends React.Component {
    render() {
        return (
            <div>
            </div>
        )
    }
    componentDidMount() {
        fetch.getOrganizeList
            .then(function(response) {
                return response.json()
            }).then(function(body) {
            console.log(body)
        })
    }
}

export default Find