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
            <div className="xiangq" onWheel={this.ok.bind(this)}>详情 
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
        console.log(this.refs)
    }
    ok(e) {
        //阻止默认事件 阻止冒泡
        e.preventDefault()
        console.log(e)
    }
}
export default Detail