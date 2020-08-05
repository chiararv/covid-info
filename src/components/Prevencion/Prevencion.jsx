import React from 'react'
import classes from './Prevencion.module.css'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaRulerHorizontal, FaHands } from 'react-icons/fa'
import { GiTap , GiNinjaMask} from 'react-icons/gi'
import { MdFace } from 'react-icons/md'

const Prevencion = () => {
  return (
    <div className={classes.container}>
      <div className={classes.linksContainer}>
        <div className={classes.card}>
        <div className={classes.washHands}>
          <GiTap className={classes.icons}/>
          <FaHands className={classes.icons}/></div>
         <h2>Lávese las manos frecuentemente</h2>
        </div>
        <div className={classes.card}>
          <div><GiNinjaMask className={classes.icons}/></div>
          <h2>Adopte medidas de higiene respiratoria</h2>
        </div>
        <div className={classes.card}>
          <div className={classes.socialDistance}>
            <BsFillPersonFill className={classes.icons}/>
            <div className={classes.distance}>1m</div>
            <BsFillPersonFill className={classes.icons}/>
          </div>
          <h2>Mantenga el distanciamiento social</h2>
        </div>
        <div className={classes.card}>
          <div><MdFace className={classes.icons}/></div>
          <h2>Evite tocarse los ojos, la nariz y la boca</h2>
        </div>
      </div>
      <div className={classes.articleContainer}>
        <div className={classes.article}>
          <p>Lávese las manos con frecuencia con un desinfectante de manos a base de alcohol o con agua y jabón. Lavarse las manos con frecuencia proporciona más protección ‎frente al contagio de la COVID-19 que usar guantes de goma. El hecho ‎de llevarlos puestos no impide el contagio, ya que si uno se toca la cara ‎mientras los lleva, la contaminación pasa del guante a la cara y puede ‎causar la infección.‎</p>
        </div>
        <div className={classes.article}>
          <p>Al toser o estornudar, cúbrase la boca y la nariz con el codo flexionado o con un pañuelo; tire el pañuelo inmediatamente y lávese las manos con un desinfectante de manos a base de alcohol, o con agua y jabón.

          ¿Por qué? Al cubrir la boca y la nariz durante la tos o el estornudo se evita la propagación de gérmenes y virus. Si usted estornuda o tose cubriéndose con las manos puede contaminar los objetos o las personas a los que toque.</p>
        </div>
        <div className={classes.article}>
          <p>Mantenga al menos 1 metro (3 pies) de distancia entre usted y las demás personas, particularmente aquellas que tosan, estornuden y tengan fiebre.

          ¿Por qué? Cuando alguien con una enfermedad respiratoria, como la infección por el 2019-nCoV, tose o estornuda, proyecta pequeñas gotículas que contienen el virus. Si está demasiado cerca, puede inhalar el virus</p>
        </div>
        <div className={classes.article}>
          <p>¿Por qué? Las manos tocan muchas superficies que pueden estar contaminadas con el virus. Si se toca los ojos, la nariz o la boca con las manos contaminadas, puedes transferir el virus de la superficie a si mismo.</p>
        </div>
      </div>
    </div>
  )
}

export default Prevencion
