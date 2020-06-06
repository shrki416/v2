import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Portfolio = () => (
  <>
    <h2>My Portfolio</h2>
    <StaticQuery
      query={query}
      render={({ allMarkdownRemark }) =>
        allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <Img
                fluid={node.frontmatter.image.childImageSharp.fluid}
                alt={node.frontmatter.title}
              />
            </Link>
          </div>
        ))
      }
    />
  </>
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
export default Portfolio
