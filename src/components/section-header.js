import PropTypes from "prop-types"
import React from "react"

const SectionHeader = ( { sectionTitle } ) => (
    <div>
        <h2>{sectionTitle}</h2>
    </div>
)

SectionHeader.propTypes = {
    sectionTitle: PropTypes.string,
}
  
SectionHeader.defaultProps = {
    sectionTitle: ``,
}

export default SectionHeader
