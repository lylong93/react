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
            <div className='loadMore-wrapper' ref='loadWrapper'>
                <span className='foot'>没有数据</span>
                <span onClick={this.ok.bind(this)} className='foot'>加载更多</span>
            </div>
        )
    }
    componentDidMount() {
        //使用拦截 减少触发 优化
        let TimeId
        //监听滚动事件
        const loadWrapper = this.refs.loadWrapper
        function callback() {
            // getBoundingClientRect chrom62 响应式下bug。。。？？？
            const top = loadWrapper.getBoundingClientRect()
            const windowHeight = window.screen.height
            console.log(top)

            if (top && top < windowHeight) {
                console.log('ok')
            }

        }
        window.addEventListener('scroll', function() {
            if (TimeId) {
                clearTimeout(TimeId)
            }
            TimeId = setTimeout(callback.bind(this), 50)
        }.bind(this), false)
    }
    ok() {
        this.props.loadr()
    }
}

export default LoadMore