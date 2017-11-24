import React from 'React'
import CityList from './parts/cityList'
class City extends React.Component {
    render() {
        return (
            <div>
                <div>City</div>
                <CityList/>
            </div>
        )
    }
}

export default City