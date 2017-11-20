import React from 'React'
import LoadMore from '../LoadMore'
import { Link } from 'react-router-dom'

import './index.scss'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMore: false,
        }
    }
    render() {
        return (
            <div>{this.props.data.map((item, index) => {
                return <div key={item.roomid} className='List-item-wrapper'>
                            <Link to='/'>
                                <div className='List-item-wrapper-main'>
                                    <div className='Liwm-left'>{item.bang}</div>
                                    <div className='Liwm-right'>
                                        <img src={item.img} alt={item.title}/>
                                    </div>
                                </div>
                                <div className='List-item-wrapper-footer'>
                                    <div className='Liwf-title'>{item.title}</div>
                                    <div className='Liwf-other'>
                                        <span>{item.time}</span>
                                        <span>{item.city}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
            })}
            <LoadMore/>
            </div>
        )
    }

}

export default List;