import React from "react"
import styled from "styled-components"
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa"

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;

  a {
    color: var(--clr-dark);
    text-decoration: none;
    font-family: var(--ff-secondary);
    padding: 1rem;

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
    <a href="https://www.facebook.com/profile.php?id=100041436045937">
      <sup>
        <FaFacebook />
      </sup>
      Facebook
    </a>
    <a href="https://github.com/shrki416">
      <sup>
        <FaGithub />
      </sup>
      Github
    </a>
    <a href="https://twitter.com/shrki416">
      <sup>
        <FaTwitter />
      </sup>
      Twitter
    </a>
    <a href="https://linkedin.com/in/aa-dev">
      <sup>
        <FaLinkedin />
      </sup>
      LinkedIn
    </a>
  </FooterWrapper>
)

export default footer
