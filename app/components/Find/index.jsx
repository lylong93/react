import React from 'React'
import Fetch from 'W/fetch'
import { bindActionCreators } from 'redux'

import List from './List'
import Search from './Search'
import Test from './test'
// import tt from 'W/reducers/index.js'
// import * as oldActionCreator from 'W/reducers/index.js'
import { test } from 'W/reducers/action.js'


import { connect } from 'react-redux'

class Find extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            num: 0
        }
    }
    render() {
        return (
            <div id='find'>     
                <div>this</div>
                <button onClick={this.on.bind(this)}> llll</button>
                <Test num={this.state.num}></Test>
            { /*<Search/>{this.state.num}
            <List data={this.state.data}/>*/ }
            </div>
        )
    }
    componentDidMount() {
        Fetch.getOrganizeList()
            .then(res => {
                return res.json()
            })
            .then(res => {
                this.setState({
                    data: res.data.list
                })
            // console.log(this.props.children)
            })
    }
    on() {
        this.setState({
            num: this.state.num + 1
        })
        this.props.test();
        console.log(this.props.test)
    }
}
function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        test: bindActionCreators(test, dispatch),
    }
}
// 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Find)