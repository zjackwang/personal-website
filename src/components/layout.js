import React from "react"

// local components
import Header from "./header"
import Footer from "./footer"

// css
import "../styles/index.scss"
import layoutStyles from "../styles/layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
