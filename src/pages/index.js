import React from "react"
import { graphql, Link } from "gatsby"
import Introduction from "../components/Introduction"
import About from "../components/about"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
    <About />
    <h4>{data.allMarkdownRemark.title}</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3>{node.frontmatter.title}</h3>
        </Link>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default IndexPage
