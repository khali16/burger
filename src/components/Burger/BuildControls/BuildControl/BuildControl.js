import React from "react";
import styles from "./BuildControl.module.css";

const buildControl = (props) => {
  console.log(props.ingredientAmount);
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button
        className={styles.Less}
        onClick={props.removed}
        disabled={props.ingredientAmount <= 0}
      >
        Less
      </button>
      <button
        className={styles.More}
        onClick={props.added}
        //disabled = iloscIngredientu > 3
        // ingredientAmount >= 3
        disabled={props.ingredientAmount >= 3}
      >
        More
      </button>
    </div>
  );
};

export default buildControl;
