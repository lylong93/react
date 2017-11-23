import React from 'React'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './style.scss'
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div id='siangq' className="xiangq">详情 
                <div onClick={this.back.bind(this)}>返回</div>
                <div></div>
            </div>
        )
    //
    }
    componentDidMount() {
        console.log(this.props.match)
    }
    back() {
        window.history.back()
    }
}
export default Detail