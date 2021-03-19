import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Tomato", type: "tomato" },
  { label: "Onion", type: "onion" },
];

const buildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  disabled2,
  purchasable,
  ordered,
  price,
  ingredients,
}) => (
  <div className={styles.BuildControls}>
    <p>
      Current price: <strong>{price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => ingredientAdded(ctrl.type)}
        removed={() => ingredientRemoved(ctrl.type)}
        ingredientAmount={ingredients[ctrl.type]}
      />
    ))}
    <button
      className={styles.OrderButton}
      disabled={!purchasable}
      onClick={ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
