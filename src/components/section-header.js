import PropTypes from "prop-types"
import React from "react"

const SectionHeader = ( { sectionTitle } ) => (
    <div className="section-header">
        <h2 className="section-header__title">{sectionTitle}</h2>
    </div>
)

SectionHeader.propTypes = {
    sectionTitle: PropTypes.string,
}
  
SectionHeader.defaultProps = {
    sectionTitle: ``,
}

export default SectionHeader
