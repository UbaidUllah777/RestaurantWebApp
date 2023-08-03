import { useContext } from "react";
import { Link } from "react-router-dom";
import Buttons from "../Button/Buttons";

// Componenets
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const cartHasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (variantId) => {
    cartCtx.removeItem(variantId);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ item, amount: 1 });
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      item={item}
      onRemove={cartItemRemoveHandler.bind(null, item.VariantId)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div
      className={`header-cart-icon dropdown mr-[10px] inline-block align-middle pl-[17px] text-[17px]${
        props.className ? ` ${props.className}` : ""
      }`}
      style={props.style}
    >
      <Link aria-label="link" to="#" className="relative inline-block">
        <i
          className={`feather-shopping-bag px-0 py-[30px] inline-block ${props.className}`}
        ></i>
        <span className="cart-count font-serif bg-darkgray text-white absolute top-[20px] right-[-10px] w-[16px] h-[16px] text-center text-[10px] leading-[16px] rounded-full">
          {numberOfCartItems}
        </span>
      </Link>
      <ul id="myTable" className="dropdown-menu block cart-item-list">
        {/* Cart item */}
        <ul
          style={{
            maxHeight: "15rem",
            overflowY: "scroll",
          }}
        >
          {cartItems}
        </ul>
        {/* TotalAmount */}
        <li className="cart-item cart-total">
          {cartHasItems && (
            <div className="font-serif mb-[15px] w-full">
              <span className="w-[50%] inline-block text-md uppercase">
                Subtotal:
              </span>
              <span className="w-[50%] inline-block text-right text-md font-medium">
                $ {totalAmount}
              </span>
            </div>
          )}
          {!cartHasItems && (
            <div className="font-serif  mb-[10px] text-center  mt-[10px]  w-full">
              <span
                style={{ color: "#A6270C" }}
                className="w-[100%] inline-block font-medium text-md  uppercase "
              >
                Your Cart Is Empty
              </span>
            </div>
          )}
          {cartHasItems && (
            <Buttons
              to="/shop/shopping-cart"
              className="btn btn-secondary rounded-none font-medium font-serif uppercase md:mb-[15px]"
              themeColor="#e42564"
              color="#2c6482"
              size="sm"
              title="view cart"
            />
          )}
          {cartHasItems && (
            <Buttons
              to="/shop/checkout"
              className="btn btn-secondary rounded-none font-medium font-serif uppercase md:mb-[15px]"
              themeColor="#e42564"
              color="#2c6482"
              size="sm"
              title="checkout"
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Cart;
