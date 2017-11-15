import React , { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import css from './index.scss'
// import addTodo from '/W/action'
import increaseAction from 'W/reducers/action'
import fetch from 'W/fetch/index.js'
class HomeHeader extends React.Component {

    // constructor(props) {
    //     // super(props);
    //     this.state = {
    //         isof: true
    //     };
    //     this.handleClick = this.handleClick.bind(this)
    // }
    render() {
        const {value, onIncreaseClick} = this.props
        return (
            <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={this.handleClick}>fetch</button>
      </div>
        )
    }

    handleClick(e) {
        // e.preventDefault();
        // this.setState(prevState => ({
        //     isof: !prevState.isof
        // }));
        // console.log(this.state.isof)
        fetch()
    }

}


function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader)