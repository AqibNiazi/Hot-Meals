import React from "react";
import MealItemForm from "./MealItemForm";
import styles from "./MealItems.module.css";
const MealItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id}/>
      </div>
    </li>
  );
};

export default MealItems;
