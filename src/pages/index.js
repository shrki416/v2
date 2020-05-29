import React from "react"
import { graphql, Link } from "gatsby"
import Introduction from "../components/Introduction"
import About from "../components/about"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

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
          <Img
            fluid={node.frontmatter.image.childImageSharp.fluid}
            alt={node.frontmatter.title}
          />
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
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
