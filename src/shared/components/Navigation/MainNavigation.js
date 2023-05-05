import React, { useState } from "react"
import { Link } from "react-router-dom"

import MainHeader from "./MainHeader"
import "./MainNavigation.css"
import NavLinks from "./NavLinks"
import SideDrawer from "./SideDrawer"

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const openDrawer = () => {
    setDrawerIsOpen(true)
  }

  const closeDrawer = () => {
    setDrawerIsOpen(false)
  }

  return (
    <React.Fragment>
      {drawerIsOpen && (
        <SideDrawer>
          <div className="nav main-navigation__drawer-nav">
            <NavLinks />
          </div>
        </SideDrawer>
      )}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation
