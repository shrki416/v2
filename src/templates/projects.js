import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default function Projects({ data }) {
  const post = data.markdownRemark
  let projectPhoto = post.frontmatter.image.childImageSharp.fluid

  return (
    <Layout>
      <div id="projects">
        <h1>{post.frontmatter.title}</h1>
        <Img fluid={projectPhoto} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
