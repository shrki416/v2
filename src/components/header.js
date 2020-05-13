import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/aa-white-logo.png"

const Header = () => (
  <header
    style={{
      background: `#002d40`,
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        padding: `1.5rem`,
      }}
    >
      <Link to="/">
        <img src={logo} alt="aa-dev logo" />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
