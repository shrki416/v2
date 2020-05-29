import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styled from "styled-components"

const ProjectPage = styled.section`
  position: relative;

  @media (min-width: 600px) {
    display: grid;
    width: min-content;
    margin: 0 auto;
    grid-column-gap: 1em;
    grid-template-areas:
      "img title"
      "img subtitle";
    grid-template-columns: min-content max-content;
  }

  .projectImg {
    @media (min-width: 600px) {
      grid-area: img;
      min-width: 250px;
      position: relative;
      z-index: 2;
    }
  }
`

const ProjectTitle = styled.h2`
  margin-bottom: 0.25em;
  display: inline-block;
  font-weight: var(--fw-reg);

  strong {
    display: block;
  }
`

const ProjectSubtitle = styled.p`
  margin: 0;
  margin-bottom: 1em;
  padding: 0.25em 1em;
  font-family: var(--ff-secondary);
  font-size: var(--fs-h3);
  background: var(--clr-accent);

  @media (min-width: 600px) {
    align-self: start;
    grid-column: -1 / 1;
    grid-row: 2;
    text-align: right;
    position: relative;
    left: -1.5em;
    width: calc(100% + 1.5em);
  }
`

export default function Projects({ data }) {
  const post = data.markdownRemark
  let projectPhoto = post.frontmatter.image.childImageSharp.fluid

  return (
    <Layout>
      <ProjectPage id="projects">
        <ProjectTitle>{post.frontmatter.title}</ProjectTitle>
        <ProjectSubtitle>{post.frontmatter.subtitle}</ProjectSubtitle>
        <Img fluid={projectPhoto} className="projectImg" />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </ProjectPage>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
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
