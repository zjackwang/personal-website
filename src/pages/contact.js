import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const contact = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        My insta is{" "}
        <Link to="https://instagram.com/zjackwang" target="_blank">
          @zjackwang
        </Link>
      </p>
    </Layout>
  )
}

export default contact
