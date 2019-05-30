import PropTypes from "prop-types"
import React from "react"

const Block = ({ children }) => (
    <div className="block">
        { children }
    </div>
)

Block.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Block
