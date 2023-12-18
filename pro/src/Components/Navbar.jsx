import React from 'react'

import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>

        <Link to="/">Kalvium</Link>
      <ul>

        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/registartion">Registartion Form</Link></li>

      </ul>

    </div>
  )
}

export default Navbar