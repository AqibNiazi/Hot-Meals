import React from 'react'
import styles from "./Cart.module.css"
import Model from '../UI/Model'
const Cart = ({onClose}) => {
  return (
    <Model onClose={onClose}>
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>35.33</span>
        </div>
        <div className={styles.actions}>
            <button className={styles["button--alt"]} onClick={onClose}>Close</button>
            <button className={styles.button}>Order</button>
        </div>
    </Model>
  )
}

export default Cart