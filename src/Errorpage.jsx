import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div>
      <h2>404 Not found</h2>
      {/* Link perform client side routing */}
      <Link to="/">Home from Link </Link>
      {/* a tag performs full refresh */}
      {/* <a href="/">Home from a</a>   */}
    </div>
  )
}

export default Errorpage
