import React from 'React'

class User extends React.Component {
    render() {
        return (
            <div>
                <from>
                <input type="text" placeholder='账户'/>
                <br/>
                <input type="text" placeholder='密码'/>
                </from>
            </div>
        )
    }
}

export default User