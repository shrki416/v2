// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import logo from "../images/aa-black-logo.png"s

const Header = ({ data }) => (
  <header>
    <div>header & Navigation placeholders</div>
  </header>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
