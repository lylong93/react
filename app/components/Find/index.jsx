import React from 'React'
import fetch from 'W/fetch'

import List from './List'
import Search from './Search'

class Find extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            num: 1,
        }
    }
    render() {
        return (
            <div>
            <button onClick={this.on.bind(this)}>dianji</button>
            <Search/ >{this.state.num}
            <List data={this.state.data}/>
            </div>
        )
    }
    componentDidMount() {
        fetch.getOrganizeList
            .then(res => {
                return res.json()
            })
            .then(res => {
                this.setState({
                    data: res.data.list
                })
                console.log(this.state.data)
            })
    }
    on() {
        this.setState({
            num: this.state.num + 1
        })
        console.log(this.state)
    }
}
export default Find