import React from 'React'
import './style.scss'
class LoadMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div className='loadMore-wrapper'>
                <span className='foot'>没有数据</span>
                <span onClick={this.on} className='foot'>加载更多</span>
            </div>
        )
    }
    on() {
        console.log('ok')
    }
}

export default LoadMore