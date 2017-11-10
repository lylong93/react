import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from '.././containers/Home/index.jsx'
import detail from '.././containers/Detail/index.jsx'

// class RouterMap extends React.Component {
//     render() {
//         return (
//             <Router>
//                 <div>
//                   <ul>
//                     <li><Link to="/">Home</Link></li>
//                   </ul>

//                   <hr/>
//                   <Route exact path="/" component={Home}/>
//                   <Route path="/topics" component={detail}/>
//                 </div>
//               </Router>
//             )
//     }
// }
const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/detail">detail</Link></li>
      </ul>
      <Route path="/" component={Home}/>
      <Route path="/detail" component={detail}/>
      {/*<Route path="/topics" component={Topics}/>*/}
    </div>
  </Router>
)

export default BasicExample
// export default RouterMap
