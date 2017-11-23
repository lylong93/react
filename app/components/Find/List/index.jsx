import React from 'React'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import LoadMore from '../parts/LoadMore'
import Item from '../parts/Item'
import Fetch from 'W/fetch'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMore: false,
            page: 0,
            data: []
        }
    }
    render() {
        return (
            <div>
            <Item data={this.state.data} />
            <LoadMore loadr={this.on.bind(this)}/>
            </div>
        )
    }
    componentDidMount() {
        //加载第一页数据
        this.getData(0)
    }
    // 加载下一页数据
    on() {
        let _page = this.state.page
        this.setState({
            page: _page + 1
        })
        this.getData(_page)
    }
    getData(page) {
        Fetch.getOrganizeList(page)
            .then(res => {
                return res.json()
            })
            .then(res => {
                let _data = res.data.list
                this.setState({
                    //数据拼接
                    data: this.state.data.concat(_data)
                })
            })
    }


}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)