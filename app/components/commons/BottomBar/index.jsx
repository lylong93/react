import React from 'React'
import { Link } from 'react-router-dom'

import './BottomBar.scss'

class BottomBar extends React.Component {
    render() {
        return (
            <div className="bottombar">
                <div className = "bottombar-item">
                    <Link to ='/'><i className="iconfont icon-chuangyi"></i></Link>
                </div>
                <div className = "bottombar-item" >
                    <Link to ='/find'><i className="iconfont icon-faxian"></i></Link>
                </div>
                <div className = "bottombar-item">
                    <Link to ='/user'><i className="iconfont icon-renxiang"></i></Link>
                </div>
            </div>
        )
    }
}
export default BottomBar