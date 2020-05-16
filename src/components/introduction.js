import React from "react"
import AAImage from "../images/aa.jpg"
import styled from "styled-components"

const Intro = styled.section`
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

  img {
    @media (min-width: 600px) {
      grid-area: img;
      min-width: 250px;
      position: relative;
      z-index: 2;
    }
  }
`

const Title = styled.h2`
  margin-bottom: 0.25em;
  display: inline-block;
  font-weight: var(--fw-reg);

  strong {
    display: block;
  }
`

const SubTitle = styled.p`
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

const Introduction = () => (
  <Intro>
    <Title>
      Hi, I am <strong>Ahmed Abdelaal</strong>
    </Title>
    <SubTitle>Software Engineer</SubTitle>
    <img src={AAImage} alt="Ahmed smiling" />
  </Intro>
)

export default Introduction
