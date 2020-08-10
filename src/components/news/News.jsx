import React from 'react'
import classes from './News.module.css'

const News = ({title, source, description, author, img, web, date}) => {


  return (
    <div className={classes.container}>
      <h2>{title}</h2>
      <hr/>
      <div className={classes.articleInfo}>
        { author && <span className={classes.author}>Por: {author}  |</span>}
        <span>{date}</span>
      </div>
      {
       description && img && 
      <div className={classes.content}>
        <p className={classes.description}>{description}</p>
        <img src={img} alt=""/>
      </div>
      }
      <div className={classes.source}>
        <span>Fuente: {source}</span>
        <span><a href={web}>Ir al sitio web</a></span>
      </div>
    </div>
  )
}

export default News
