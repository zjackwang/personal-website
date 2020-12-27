import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// components
import Layout from "../components/layout"

const Blog = () => {
  const posts = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
                author
              }
              html
            }
          }
        }
      }
    `
  )

  const edges = posts.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {edges.map((edge, index) => {
          const { title, date, author } = edge.node.frontmatter
          const html = edge.node.html
          console.log(html)
          return (
            <li key={index}>
              <h2>{title}</h2>
              <h3>{author}</h3>
              <h3>{date}</h3>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
