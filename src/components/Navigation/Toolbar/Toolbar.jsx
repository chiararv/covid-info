import React from 'react'
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavItems'
import { FiMenu } from 'react-icons/fi'
import corona from '../../coronavirus/corona.png'


const Toolbar = ({showSideDrawer}) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.MobileOnly} onClick={showSideDrawer}><FiMenu /></div>
      <img className={classes.Logo}src={corona} alt=""/>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Toolbar
