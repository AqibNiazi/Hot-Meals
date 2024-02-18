import React from 'react'
import styles from "./MealItem.module.css"
import MealItemForm from './MealItemForm'
const MealItem = ({name,description,price,id}) => {
    const Price=`$${price.toFixed(2)}`
  return (
    <li  className={styles.meal}>
        <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{Price}</div>
        </div>
        <div>
          <MealItemForm id={id}/>
        </div>
    </li>
  )
}

export default MealItem