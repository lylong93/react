import React from 'React'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { city } from 'W/reducers/action'
class CityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowCity: 'xian',
            name: 'zhen',
            cityList: ['北京', '上海', '广州', '杭州', '苏州', '兰州']
        }
    }
    render() {
        // console.log(dispatch);
        return (
            <div>               
                <div >改变</div>
                <ul>{this.state.cityList.map((item, index) => {
                return <li key={index} onClick={this.OK.bind(this,
                        item
                    )}>{item}</li>
            })}
                </ul>
            </div>
        )
    }
    componentDidMount() {
        //后台城市数据
        console.log(this.props)
    }
    OK(index) {
        console.log(index)
        this.props.change(index)
    }

}

function mapStateToProps(state) {
    return {
        cityname: state.city
    }
}

const mapDispatchToProps = dispatch => {
    return {
        change: id => {
            dispatch(city(id))
        },
        ckk: bindActionCreators(city, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps)(CityList)