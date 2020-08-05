import React from 'react'
import coronavirus from '../../coronavirus/corona.png'
import NavItems from '../NavigationItems/NavItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = ({closed, open}) => {
  console.log(classes)

  let attachedClasses = [classes.SideDrawer, classes.Close]
  if(open){
    attachedClasses=[classes.SideDrawer, classes.Open]
  }
  return (
    <>
    <Backdrop show={open} clicked={closed}/>
    <div className={attachedClasses.join(' ')}>
      <div className={classes.Logo}>
      <img src={coronavirus} alt="coronavirus-img"/>
      </div>
      <nav>
      <NavItems />
      </nav>
    </div>
    </>
  )
}

export default SideDrawer
