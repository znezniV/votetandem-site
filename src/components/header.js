import PropTypes from "prop-types"
import React from "react"
import strings from "../components/local"

const Header = ({ siteTitle }) => (
  <header className="header">
      <h1 className="header__title">votetandem.org</h1>
      <p className="header__text">{strings.headerIntro}</p>
      <a href="https://app.votetandem.org" className="btn header__link">{strings.actionSignUp}</a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
