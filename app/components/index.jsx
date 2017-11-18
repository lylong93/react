import React from 'React'
import { connect } from 'react-redux'
import BottomBar from 'W/components/commons/BottomBar'

class App extends React.Component {
    render() {
        return (
            <div>
                <BottomBar/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)