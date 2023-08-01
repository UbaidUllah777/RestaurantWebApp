import React from "react";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <input
        id="amount"
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <button>+Add to Cart</button>
    </form>
  );
};

export default MealItemForm;
