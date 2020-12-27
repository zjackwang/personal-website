import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// import "../styles/header.module.scss"
import headerStyles from "../styles/header.module.scss"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.name} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.nav_list}>
          <li>
            <Link
              className={headerStyles.nav_item}
              activeClassName={headerStyles.active_nav_item}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.nav_item}
              activeClassName={headerStyles.active_nav_item}
              to="/about"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.nav_item}
              activeClassName={headerStyles.active_nav_item}
              to="/contact"
            >
              Contact Me
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.nav_item}
              activeClassName={headerStyles.active_nav_item}
              to="/blog"
            >
              My Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
