import React from "react"
import aboutMe from "../images/about-me.svg"
import code from "../images/code.svg"
import deskPhoto from "../images/portfolio-03.jpg"
import resume from "../images/Ahmed - Resume.pdf"
import styled from "styled-components"
import world from "../images/world.svg"

const AboutWrapper = styled.section`
  margin: 0 auto;

  p {
    font-size: 3rem;
    text-align: center;
    margin: 0;
  }

  h2 {
    text-align: center;
    margin-bottom: 1.5em;
    font-size: 2em;
  }

  @media (min-width: 800px) {
    span {
      position: relative;
    }

    span:before {
      font-family: var(--ff-secondary);
      content: "about me";
      font-size: 1.5em;
      position: absolute;
      color: rgba(255, 198, 0, 0.5);
      z-index: -1;
      white-space: nowrap;
      left: 30%;
      top: 15%;
    }
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
    margin-bottom: 1em;

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
  margin-bottom: 0;
  font-size: var(--fs-h3);
  background: var(--clr-accent);
  padding: 0.25em 1em;
  font-family: var(--ff-secondary);

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
  margin-bottom: 2em;

  span {
    font-family: var(--ff-secondary);
    letter-spacing: 1px;
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1em;

  @media (min-width: 1000px) {
    grid-gap: 2em;
  }

  div {
    border: 1px solid var(--clr-dark);
    background: #fff;
    color: var(--clr-dark);
    padding: 1em;
    border-radius: 1em;
    margin-bottom: 2em;
  }

  img {
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    font-size: 1rem;
    text-align: left;
    line-height: 1.75;
  }

  h3 {
    font-family: var(--ff-secondary);
    text-align: center;
    letter-spacing: 1px;
    margin: 2em auto;
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
            <img src={aboutMe} alt="aboutMe" />
            <h3>Hi! It's Me</h3>
            <p>
              I'm a self-taught developer who is passionate about learning and
              building software. I received my MS in Information Technology from
              Southern New Hampshire University in January 2019 and have been
              learning and developing since. Software is in all industries. It
              is shaping our world and I want to contribute to it and make an
              impact. I can't imagine where we'd be without cool software.
            </p>
          </div>

          <div>
            <img src={code} alt="code" />
            <h3>Why Dev</h3>
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
            <img src={world} alt="world-map" />
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
          </div>
        </Container>
        <a href="#portfolio" className="btn">
          Projects
        </a>
      </AboutWrapper>

      <AboutMeSection>
        <AboutMeSectionTitle>... more about me</AboutMeSectionTitle>
        <AboutMeSectionSubTitle className="dark-p">
          Joining SDMM
        </AboutMeSectionSubTitle>

        <AboutMeSectionText>
          <p>
            <span>Software Development Mastermind program</span> is a hands-on
            learning program where I worked with Andy Sterkowitz who is a
            professional full-stack software developer.
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
          <a href={resume} className="btn">
            <strong>Resumé</strong>
          </a>
        </div>
      </AboutMeSection>
    </>
  )
}

export default About
