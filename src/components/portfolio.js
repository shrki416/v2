import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import "./layout.css"

const PortfolioSection = styled.section`
  text-align: center;
  background: var(--clr-dark);
  padding-bottom: 6em;
  margin-bottom: 3em;

  h2 {
    color: var(--clr-light);
    text-align: center;
    margin-bottom: 2em;
    font-size: 2em;
  }

  span {
    position: relative;
  }

  span:before {
    font-family: var(--ff-secondary);
    content: "portfolio";
    font-size: 1.5em;
    position: absolute;
    color: rgba(255, 198, 0, 0.2);
    z-index: 1;
    white-space: nowrap;
    left: 30%;
    top: 15%;
  }
`
const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const Portfolio = () => (
  <PortfolioSection id="portfolio">
    <h2>
      <span>My Portfolio</span>
    </h2>
    <Projects>
      <StaticQuery
        query={query}
        render={({ allMarkdownRemark }) =>
          allMarkdownRemark.edges.map(({ node }) => (
            <div className="portfolio_item" key={node.id}>
              <Link to={node.fields.slug}>
                <Img
                  className="portfolio_img"
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  alt={node.frontmatter.title}
                />
              </Link>
            </div>
          ))
        }
      />
    </Projects>
  </PortfolioSection>
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
