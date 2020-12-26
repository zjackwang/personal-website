import React from "react"
import { Link } from "gatsby"

const header = () => {
  return (
    <header>
      <h1>Jack Wang</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li>
            <Link to="/blog">My Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default header
