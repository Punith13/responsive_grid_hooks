import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { useWindowDimensions } from '../hooks'

const Nav = () => {
  const { width } = useWindowDimensions()

  const getMobileMenu = () => {
    if (width <= 768) {
      return (
        <div className="icon">
          <MenuIcon />
        </div>
      )
    }
    return null
  }

  return (
    <nav className="navigation">
      {getMobileMenu()}
      <div className="logo">
        <strong>Great Company</strong>
      </div>
    </nav>
  )
}

export default Nav
