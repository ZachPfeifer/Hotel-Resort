import React from 'react'
import { Link } from 'react-router-dom'


const Links = () => {
  return (
    <ul >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Rooms</Link>
      </li>
    </ul>
  )
}
export default Links