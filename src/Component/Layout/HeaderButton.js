import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import classes from './HeaderButton.module.css';
import CartContext from "../Store/Cart-Context";
import CartIcon from "../Cart/CartIcon";

const HeaderButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.cartItems.reduce((total, item) => total + item.amount, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.cartItems.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.cartItems]);

  return (
    <Button variant="danger" onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}><CartIcon/></span>
      <span className={classes.title}>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </Button>
  );
};

export default HeaderButton;
