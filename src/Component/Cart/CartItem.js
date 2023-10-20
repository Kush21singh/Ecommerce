import classes from "./CartItem.module.css";
// import { Button } from "react-bootstrap";

const CartItem = (props) => {
  // const price = `{props.price}₹`;
  const price = `₹${props.price.toFixed(2)}`;

  return (
    <div className={classes.cartContainer}>
     
      <div className={classes.li1}>
      
      
        <li><img src={props.image} alt="bikash" width="80px" height="80px"/></li>
        <li>{props.name}</li>
         <li>${price}</li>
         {/* <td>{item.quantity}</td> */}
         <li><button  className={classes.btnRemove} onClick={props.onRemove}>Remove</button></li>
        
                     
      </div>
      
   

  </div>
  );
};

export default CartItem;