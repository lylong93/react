import React from 'React'
import { Link } from 'react-router-dom'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: 0
        }
    }
    render() {
        return (
            <div>
                <Link to='/city'>
                    <span>city</span>
                </Link>
                <Link to='/search'>
                    <input type="text" placeholder="输入关键字"/>
                </Link>
            </div>
        )
    }
}
export default Search