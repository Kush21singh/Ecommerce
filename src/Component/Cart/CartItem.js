import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  // Extract item properties from props
  const { name, price, image, onRemove } = props;

  return (
    <div className={classes.cartContainer}>
      <div className={classes.li1}>
        <li><img src={image} alt="Product" width="80px" height="80px" /></li>
        <li>{name}</li>
        <li>${price.toFixed(2)}</li>
        <li><button className={classes.btnRemove} onClick={onRemove}>Remove</button></li>
      </div>
    </div>
  );
};

export default CartItem;
