import React from 'React'

class LoadMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>
                <span>没有数据</span>
                <span onClick={this.on}>加载更多</span>
            </div>
        )
    }
    on() {
        console.log('ok')
    }
}

export default LoadMore