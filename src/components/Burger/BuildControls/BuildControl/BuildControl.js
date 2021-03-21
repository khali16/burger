import React, { Component } from "react";
import styles from "./BuildControl.module.css";
import Tooltip from "react-simple-tooltip";

class BuildControl extends Component {
  render() {
    return (
      <div className={styles.BuildControl}>
        <Tooltip
          content={this.props.ingredientDescription}
          customCss={"white-space: nowrap;"}
        >
          <b>{this.props.label}</b>
        </Tooltip>

        <button
          className={styles.Less}
          onClick={this.props.removed}
          disabled={this.props.ingredientAmount <= 0}
        >
          Less
        </button>
        <button
          className={styles.More}
          onClick={this.props.added}
          //disabled = iloscIngredientu > 3
          // ingredientAmount >= 3
          disabled={this.props.ingredientAmount >= 3}
        >
          More
        </button>
      </div>
    );
  }
}

export default BuildControl;
