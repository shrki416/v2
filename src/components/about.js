import React from "react"
import { Link } from "gatsby"
import resume from "../images/AA_Resume_v2.pdf"
import styled from "styled-components"

import code from "../images/code.svg"
import world from "../images/world.svg"
import aboutMe from "../images/about-me.svg"
import deskPhoto from "../images/portfolio-03.jpg"

const AboutWrapper = styled.section`
  color: var(--clr-dark);
  margin: 0 auto;
  // background: #fff;

  p {
    font-size: 3rem;
    text-align: center;
    margin: 0;
  }

  h2 {
    text-align: center;
    margin-bottom: 1.5em;
    font-size: 2.5em;
  }

  span {
    position: relative;
  }

  span:before {
    font-family: var(--ff-secondary);
    content: "about me";
    font-size: 1.5em;
    position: absolute;
    color: rgba(255, 198, 0, 0.75);
    z-index: -1;
    white-space: nowrap;
    left: 30%;
    top: 15%;
  }
`

const AboutMeSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 200px;
    grid-template-areas:
      "title img"
      "subtitle img"
      "text img";
    grid-column-gap: 2em;
  }

  img {
    box-shadow: var(--bs);
    margin-bottom: 2em;

    @media (min-width: 600px) {
      grid-area: img;
      position: relative;
      z-index: 2;
    }
  }
`

const AboutMeSectionTitle = styled.h2`
  margin-bottom: 0.25em;
  @media (min-width: 600px) {
    grid-area: title;
  }
`

const AboutMeSectionSubTitle = styled.p`
  margin: 0;
  font-size: var(--fs-h3);
  background: var(--clr-accent);
  padding: 0.25em 1em;
  font-family: var(--ff-secondary);
  margin-bottom: 1em;

  @media (min-width: 600px) {
    grid-column: 1 / -1;
    grid-row: 2;
    position: relative;
    left: -1em;
    width: calc(100% + 2em);
    padding-left: 1em;
    padding-right: calc(200px + 4em);
  }
`

const AboutMeSectionText = styled.div`
  @media (min-width: 600px) {
    grid-area: text;
  }
`
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 2.5em;

  img {
    width: 100%;
  }

  p {
    font-size: 1rem;
    text-align: justify;
    line-height: 1.75;
  }

  h3 {
    text-align: center;
    margin-bottom: 2rem;
  }

  // div:nth-of-type(3) {
  //   background: white;
  // }

  @media (min-width: 1000px) {
    img {
      width: 85%;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(1, auto);
  }

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 1.5em;
    margin-bottom: 2rem;
  }
`

const About = () => {
  return (
    <>
      <AboutWrapper id="about">
        <h2>
          <span>About Me</span>
        </h2>

        <Container>
          <div>
            <h3>Hi! It's Me</h3>
            <p>
              I'm a self-taught developer who is passionate about learning and
              building software. I received my MS in Information Technology from
              Southern New Hampshire University in January 2019 and have been
              learning and developing since. Software is in all industries. It
              is shaping our world and I want to contribute to it and make an
              impact. I can't imagine where we'd be without cool software.
            </p>
            <img src={aboutMe} alt="aboutMe" />
          </div>

          <div>
            <h3>Why Dev</h3>
            <img src={code} alt="code" />
            <p>
              It leads to innovations and creativity that literally change the
              world. Learning software development makes me feel like I there's
              nothing I can't do, which is an awesome feeling. Problem solving
              is an essential part of developing and I love that feeling when I
              find a solution to a problem I run into. Also, I love how
              adaptable you need to be. The industry is moving fast and to keep
              up you always have to be learning and adapting to the industry
              needs which makes it fun.
            </p>
          </div>

          <div>
            <h3>Traveling</h3>
            <p>
              I LOVE to travel. It's one of my favorite things to do. It has
              been so important to my development as a person. It lets me get
              out of my comfort zone, stepping into an unfamiliar place can feel
              intimidating, but once I take the plunge I'm often surprised by
              how confident I get taking on new challenges that I wouldn't have
              tackled before. The world in an incredible place, traveling allows
              me to discover the world's remarkable cultural diversity.
            </p>
            <img src={world} alt="world-map" />
          </div>
        </Container>
        <Link to={"/"} className="btn">
          Projects
        </Link>
      </AboutWrapper>

      <AboutMeSection>
        <AboutMeSectionTitle>... more about me</AboutMeSectionTitle>
        <AboutMeSectionSubTitle>Joining SDMM</AboutMeSectionSubTitle>

        <AboutMeSectionText>
          <p>
            <strong>Software Development Mastermind program</strong> is a
            hands-on learning program where I worked with Andy Sterkowitz who is
            a professional full-stack software developer.
          </p>
          <p>
            During the program I was assigned to work on real-world projects
            that aimed to take me outside of my comfort zone and increase my web
            development skills. I completed four projects during that time and
            met the deadlines on all my projects.
          </p>
        </AboutMeSectionText>

        <img src={deskPhoto} alt="Laptop on a desk" />

        <div>
          <Link to={resume} className="btn">
            <strong>Download My Resume</strong>
          </Link>
        </div>
      </AboutMeSection>
    </>
  )
}

export default About
