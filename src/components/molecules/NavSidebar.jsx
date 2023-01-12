import React from 'react'
import { NavLink } from 'react-router-dom'

const NavSidebar = ( {children,label, to } ) => {
  return (
    <div className="Navlink">
      <NavLink
        to={to}
      >
        <div className="Linkicon">{children}</div>
        <span>{label}</span>
      </NavLink>
    </div>
  )
}

export default NavSidebar