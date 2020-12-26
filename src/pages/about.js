import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const about = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>
        <Link to="/contact">Work with me</Link>
      </p>
    </Layout>
  )
}

export default about
