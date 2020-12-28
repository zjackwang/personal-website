import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// components
import Layout from "../components/layout"
import Head from "../components/head"

//css
import blogStyles from "../styles/blog.module.scss"

const Blog = () => {
  const posts = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
              author
            }
          }
        }
      }
    `
  )

  const edges = posts.allContentfulBlogPost.edges

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {edges.map((edge, index) => {
          const { title, publishedDate, slug, author } = edge.node
          return (
            <li key={index} className={blogStyles.post}>
              <Link to={"/blog/" + slug}>
                <h2>{title}</h2>
                <p>
                  {publishedDate} {author}
                </p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
