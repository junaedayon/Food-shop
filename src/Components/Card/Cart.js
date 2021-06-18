import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart(props) {
  const cartCtrx = useContext(CartContext);
  const totalAmount = `$${cartCtrx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtrx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtrx.removeItem(id)
  };

  const cartItemAddHandler = (item) => {
    cartCtrx.addItem({...item, amount:1})
  };

  const cartItems = (
    <ul className="cart-items">
      {cartCtrx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd = {cartItemAddHandler.bind(null , item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onDisablePortal={props.onDisablePortal}>
      {cartItems}

      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className="actions">
        <button className="buttons--alt" onClick={props.onDisablePortal}>
          Cancel
        </button>
        {hasItem && <button className="buttons">Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
