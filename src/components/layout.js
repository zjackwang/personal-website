import React from "react"

// local components
import Header from "./header"
import Footer from "./footer"

// css
import "../styles/index.scss"

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default layout
