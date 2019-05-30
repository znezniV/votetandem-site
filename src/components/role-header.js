import PropTypes from "prop-types"
import React from "react"

const RoleHeader = ({ roleName }) => (
    <div>
        <p>{ roleName }</p>
    </div>
)

RoleHeader.propTypes = {
    roleName: PropTypes.string,
}
  
RoleHeader.defaultProps = {
    roleName: ``,
}

export default RoleHeader
