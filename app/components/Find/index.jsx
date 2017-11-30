import React from 'React'
import Fetch from 'W/fetch'
import { bindActionCreators } from 'redux'

import List from './List'
import Header from './Header'
import Test from './test'
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
                <Header/>
                <List/>
            </div>
        )
    }
    componentDidMount() {}
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
