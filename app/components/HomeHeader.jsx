import React , { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import css from './index.scss'
// import addTodo from '/W/action'
import action from 'W/reducers/action'

class HomeHeader extends React.Component {

    // constructor(props) {
    //     // super(props);
    //     this.state = {
    //         isof: true
    //     };
    //     this.handleClick = this.handleClick.bind(this)
    // }
    render() {
        const {dispatch, go} = this.props
        return (
            <div id= "home-header" className="kk">
                <div className="gg" >
                    <span>城市</span>
                    <a href="#" onClick= {this.handleClick}>go</a>
                    <i></i>
                </div>
                <div>
                    <i></i>
                </div>
                <div>
                    <div>
                        <i></i>
                        <input type="text" placeholder="输入关键字"/>
                    </div>
                </div>
            </div>
        )
    }

    handleClick(e) {
        // e.preventDefault();
        // this.setState(prevState => ({
        //     isof: !prevState.isof
        // }));
        // console.log(this.state.isof)
        dispatch(addTodo(text))
    // go()
    }

}

function select() {
    return {
        go: () => dispatch(addTodo)
    };
}
export default connect()(HomeHeader)