import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/aa-black-logo.png"

const Header = ({ data }) => (
  <header>
    <div>hello</div>
  </header>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
