import React, { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const variantPrice = `$${props.item.variantPrice.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const handleAddClick = () => {
    cartCtx.addItem({
      variantId: props.item.variantId,
      variantTitle: props.item.variantTitle,
      amount: 1,
      variantPrice: parseFloat(props.item.variantPrice),
    });
  };

  const handleRemoveClick = () => {
    console.log("Remove button clicked");
    cartCtx.removeItem(props.item.variantId);
  };

  return (
    <li key={props.item.VariantId} className="cart-item items-center">
      <Link aria-label="link" to="#" className="font-serif close">
        {" "}
        <span
          onClick={handleRemoveClick}
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            font: "inherit",
            fontWeight: "semi-bold",
            fontSize: "1rem",
            color: "#8a2b06",

            width: "1.5rem",
            textAlign: "center",
            borderRadius: "3px",
            backgroundColor: "transparent",
            cursor: "pointer",
            marginLeft: "1rem",
            margin: "0.25rem",
          }}
        >
          -
        </span>{" "}
        <span
          onClick={handleAddClick}
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            font: "inherit",
            fontWeight: "semi-bold",
            fontSize: "1rem",
            color: "#8a2b06",

            width: "1.5rem",
            textAlign: "center",
            borderRadius: "3px",
            backgroundColor: "transparent",
            cursor: "pointer",
            marginLeft: "1rem",
            margin: "0.25rem",
          }}
        >
          {" "}
          +{" "}
        </span>{" "}
      </Link>
      <div className="product-image">
        <Link aria-label="link" to="#">
          <img
            src="https://via.placeholder.com/150x191"
            className="cart-thumb"
            alt="cart-product"
            width={50}
            height={67}
          />
        </Link>
      </div>
      <div className="product-detail font-serif">
        <Link aria-label="link" to="#">
          {props.item.variantTitle}
        </Link>
        <span className="item-ammount">
          {variantPrice} x
          <span style={{ color: "#A6270C" }}> {props.item.amount}</span>
        </span>
      </div>
    </li>
  );
};

export default CartItem;
