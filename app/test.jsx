
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
    render() {
        const {onIncreaseClick} = this.props
        return (
            <div>
        { /*<span>{this.state.count}</span>*/ }
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
        )
    }
}

// Counter.propTypes = {
//     value: PropTypes.number.isRequired,
//     onIncreaseClick: PropTypes.func.isRequired
// }

// Action
const increaseAction = {
    type: 'increase'
}

// Reducer
function counter(state = {
        count: 0
    }, action) {
    const count = state.count
    switch (action.type) {
    case 'increase':
        return {
            count: count + 1
        }
    default:
        return state
    }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
// function mapStateToProps(state) {
//     return {
//         value: state.count
//     }
// }

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}


// function select(state, dispatch) {
//     return {
//         mapStateToProps: mapStateToProps(state),
//         mapDispatchToProps: mapDispatchToProps(dispatch)
//     }
// }
// Connected Component
// const App = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Counter)

export default connect(mapDispatchToProps)(Counter)