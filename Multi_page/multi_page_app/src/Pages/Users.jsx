import React from 'react'
import {Link} from "react-router-dom"

function Users() {
  return (
    <div>
     <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/users">Users</Link></li>
     </ul>
    </div>
  )
}

export default Users