import React from "react"
import styled from "styled-components"
import ThemeChanger from "../components/themeChanger"

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (min-width: 600px) {
    padding: 0;
    margin: 0;
  }
`

const Menu = styled.ul`
  display: flex;
  padding: 0;

  li {
    padding: 1em;
    list-style: none;
    font-family: var(--ff-secondary);
  }

  a {
    color: var(--clr-dark);
    text-decoration: none;
    transition: all 0.3 ease 0s;
  }

  a:hover {
    color: var(--clr-accent);
    sup {
      color: var(--clr-dark);
    }
  }

  sup {
    color: var(--clr-accent);
    font-family: var(--ff-primary);
  }
`

const Header = () => (
  <header>
    <Wrapper>
      <Menu>
        <li>
          <a href="#about" className="anchor-dark">
            <sup>01. </sup>About
          </a>
        </li>
        <li>
          <a href="#portfolio" className="anchor-dark">
            <sup>02. </sup>Projects
          </a>
        </li>
        <li>
          <a href="/" className="anchor-dark">
            <sup>03. </sup>Blog
          </a>
        </li>
        <li>
          <a href="#contact" className="anchor-dark">
            <sup>04. </sup>Contact
          </a>
        </li>
      </Menu>
      <ThemeChanger />
    </Wrapper>
  </header>
)

export default Header
