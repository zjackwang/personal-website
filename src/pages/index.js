import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Index = () => {
  return (
    <Layout>
      <h1>Hello World</h1>
      <p>
        Contact me at <Link to="/contact">this</Link>
      </p>
    </Layout>
  )
}

export default Index
