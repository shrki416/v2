import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa"

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 10vh;

  a {
    color: var(--clr-dark);
    text-decoration: none;
    font-family: var(--ff-secondary);

    @media (max-width: 600px) {
      font-size: 0.75em;
    }
  }

  a:hover {
    color: var(--clr-accent);
    sup {
      color: var(--clr-dark);
    }
  }

  sup {
    color: var(--clr-accent);
    font-size: 1.5em;

    @media (min-width: 600px) {
      padding: 0.25em;
    }
  }
`

const footer = () => (
  <FooterWrapper>
    <Link to="/">
      <sup>
        <FaFacebook />
      </sup>
      Facebook
    </Link>
    <Link to="/">
      <sup>
        <FaGithub />
      </sup>
      Github
    </Link>
    <Link to="/">
      <sup>
        <FaTwitter />
      </sup>
      Twitter
    </Link>
    <Link to="/">
      <sup>
        <FaLinkedin />
      </sup>
      LinkedIn
    </Link>
  </FooterWrapper>
)

export default footer
