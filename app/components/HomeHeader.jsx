import React from 'react'
import css from './1.scss'

class HomeHeader extends React.Component {
    render() {
        return (
            <div id= "home-header" className="kk">
                <div className="gg">
                    <span>城市</span>
                     
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
}

export default HomeHeader