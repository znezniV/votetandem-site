import PropTypes from "prop-types"
import React from "react"
import strings from "../components/local"

const Header = ({ videoSrc }) => (
  <video autoPlay muted playsInline loop>
      <source src={videoSrc} />
  </video>
)

Header.propTypes = {
  videoSrc: PropTypes.string,
}

Header.defaultProps = {
  videoSrc: ``,
}

export default Header
