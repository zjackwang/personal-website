import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const Index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello World</h1>
      <p>
        Contact me at <Link to="/contact">this</Link>
      </p>
    </Layout>
  )
}

export default Index
