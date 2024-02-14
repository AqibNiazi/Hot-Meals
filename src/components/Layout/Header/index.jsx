import React, { Fragment } from 'react'
import Button from '../../UI/Button'
import meals from "../../../assets/meals.jpg"
import styles from "./index.module.css"
const Header = () => {
  return (
    <Fragment>
        <header className={styles.header}>
            <h1>Hot Meals</h1>
            <Button>Cart</Button>
        </header>
        <div className={styles["main-image"]}>
            <img src={meals}/>
        </div>
    </Fragment>
  )
}

export default Header