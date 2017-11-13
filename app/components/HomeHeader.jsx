import React from 'react'
import css from './index.scss'

class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isof: true
        };
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
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
        e.preventDefault();
        this.setState(prevState => ({
            isof: !prevState.isof
        }));
        console.log(this.state.isof)
    }

}
export default HomeHeader