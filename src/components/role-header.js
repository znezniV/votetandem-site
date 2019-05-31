import PropTypes from "prop-types"
import React from "react"
import strings from "../components/local"

const RoleHeader = ({ roleName }) => (
    <div className="role-header">
        <div className="role-header__item">
            {strings.roleGiver}
        </div>
        <div className="role-header__item">
            {strings.roleRecipient}
        </div>
    </div>
)

RoleHeader.propTypes = {
    roleName: PropTypes.string,
}
  
RoleHeader.defaultProps = {
    roleName: ``,
}

export default RoleHeader
