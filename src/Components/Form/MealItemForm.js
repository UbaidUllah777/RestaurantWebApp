import React, { useRef, useState } from "react";

import Buttons from "../Button/Buttons";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(
      enteredAmountNumber,
      props.variantId,
      props.variantTitle,
      props.variantPrice
    );
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input
        ref={amountInputRef}
        id="amount"
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />

      <Buttons
        ariaLabel="button"
        className="font-medium font-serif uppercase rounded-none lg:mb-[15px] landscape:lg:mb-[15px]"
        themeColor={["#e42564", "#fa6259"]}
        size="sm"
        color="#fff"
        title="+Add to Cart"
        type="submit"
      />
      {!amountIsValid && <p>item muste be (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
