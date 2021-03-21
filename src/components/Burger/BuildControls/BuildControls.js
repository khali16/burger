import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad", description: "Świeża zielona sałata" },
  { label: "Bacon", type: "bacon", description: "Bekon najwyższej jakości" },
  { label: "Meat", type: "meat", description: "Mięso wołowe" },
  {
    label: "Cheese",
    type: "cheese",
    description: "Najwyższej jakości ser cheddar",
  },
  {
    label: "Tomato",
    type: "tomato",
    description: "Pomidor z prywatnej uprawy",
  },
  { label: "Onion", type: "onion", description: "Ekologiczna biała cebula" },
];

const buildControls = ({
  ingredientAdded,
  ingredientRemoved,
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
        ingredientAmount={ingredients[ctrl.type]} //ingredients["salad"]
        ingredientDescription={ctrl.description}
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
