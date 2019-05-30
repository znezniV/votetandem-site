import PropTypes from "prop-types"
import React from "react"
import strings from "../components/local"

const Header = ({ siteTitle }) => (
  <header>
      <h1>Votetandem.org</h1>
      <p>{strings.headerIntro}</p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
