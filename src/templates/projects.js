import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styled from "styled-components"

const Section = styled.section`
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

  div {
    @media (min-width: 600px) {
      grid-area: img;
      min-width: 250px;
      position: relative;
      z-index: 2;
    }
  }

  p {
    margin: 1em 0;
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
  }

  span {
    display: block;
  }
`

const PortfolioBody = styled.div`
  padding: 0 2em 2em;
  max-width: 1000px;
  margin: 0 auto;

  p {
    font-size: 1.1em;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    letter-spacing: 0.75px;
  }
`

export default function Projects({ data }) {
  const post = data.markdownRemark
  let projectPhoto = post.frontmatter.image.childImageSharp.fluid

  return (
    <Layout>
      <Section id="projects">
        <h2>
          {post.frontmatter.title}
          <span>{post.frontmatter.sub_subtitle}</span>
        </h2>
        <p className="dark-p">{post.frontmatter.subtitle}</p>
        <Img fluid={projectPhoto} />
      </Section>
      <PortfolioBody>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </PortfolioBody>
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
        sub_subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
