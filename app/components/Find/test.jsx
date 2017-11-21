import React from 'React'

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>{this.props.num} 
            </div>
        )
    }
}
export default Test