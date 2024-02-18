import React, { Fragment } from 'react'
import meals from "../../assets/meals.jpg"
import styles from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton'
const Header = ({onShowCart}) => {
  return (
    <Fragment>
        <header className={styles.header}>
            <h1>Hot Meals</h1>
           <HeaderCartButton onClick={onShowCart}/>
        </header>
        <div className={styles["main-image"]}>
            <img src={meals} alt='Table full of delicious food'/>
        </div>
    </Fragment>
  )
}

export default Header