import React from 'React'
import { connect } from 'react-redux'

class User extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder='账户'/>
                <input type="text" placeholder='密码'/>   
            </div>
        )
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
)(User)
// export default User