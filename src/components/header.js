import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

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

const Header = ({ data }) => (
  <header>
    <Wrapper>
      <Menu>
        <li>
          <Link to="/About">
            <sup>01. </sup>About
          </Link>
        </li>
        <li>
          <Link to="/">
            <sup>02. </sup>Projects
          </Link>
        </li>
        <li>
          <Link to="/">
            <sup>03. </sup>Blog
          </Link>
        </li>
        <li>
          <Link to="/">
            <sup>04. </sup>Contact
          </Link>
        </li>
      </Menu>
    </Wrapper>
  </header>
)

export default Header
