import PropTypes from "prop-types"
import React from "react"

const Header = ({ videoSrcMP4, videoSrcWebM }) => (
  <video autoPlay muted playsInline loop>
      <source src={videoSrcWebM} type="video/webm" />
      <source src={videoSrcMP4} type="video/mp4" />
  </video>
)

Header.propTypes = {
  videoSrcMP4: PropTypes.string,
  videoSrcWebM: PropTypes.string,
}

Header.defaultProps = {
  videoSrcMP4: ``,
  videoSrcWebM: ``,
}

export default Header
