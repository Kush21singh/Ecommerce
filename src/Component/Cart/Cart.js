import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import Button from "react-bootstrap/Button";
import CartContext from "../Store/Cart-Context";
import CartItem from "./CartItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Alert } from "react-bootstrap";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);

  async function fetchCartItems() {
    const enteredEmail = localStorage.getItem("email");
    const updatedEmail = enteredEmail ? enteredEmail.replace("@", "").replace(".", "") : "";

    try {
      const response = await fetch(
        `https://crudcrud.com/api/0ed66e763e514d1694874aeb2bc60775/${updatedEmail}`
      );

      if (response.ok) {
        const data = await response.json();
        const cartItems = data.map((item) => ({
          id: item._id,
          name: item.title,
          price: item.price,
          image: item.imageUrl,
          amount: item.amount,
        }));

        cartCtx.setItems(cartItems);
      } else {
        console.error("Error fetching cart items");
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }

  useEffect(() => {
    fetchCartItems();
  }, []);

  const totalAmount = cartCtx.cartItems.reduce((total, item) => total + item.price, 0);

  const hasItems = cartCtx.cartItems.length > 0;

  async function cartItemRemoveHandler(id) {
    const enteredEmail = localStorage.getItem("email");
    const updatedEmail = enteredEmail ? enteredEmail.replace("@", "").replace(".", "") : "";

    try {
      await fetch(
        `https://crudcrud.com/api/0ed66e763e514d1694874aeb2bc60775/${updatedEmail}/${id}`,
        {
          method: "DELETE",
        }
      );
      toast.error("Item is deleted successfully!");
      fetchCartItems();
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  }

  const cartItemList = cartCtx.cartItems.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
      onRemove={() => cartItemRemoveHandler(item.id)}
    />
  ));

  const OrderHandler = () => {
    setShowAlert(true);
  };

  return (
    <>
      <Modal onClose={props.onClose}>
        <h2 style={{ textAlign: "center" }}>Cart</h2>

        {hasItems ? (
          <ul className={classes["cart-items"]}>{cartItemList}</ul>
        ) : (
          <p className={classes["empty-text"]}>Your cart is empty.</p>
        )}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <Button variant="warning" onClick={props.onClose}>
            Close
          </Button>
          <Button variant="danger" onClick={OrderHandler}>
            Order
          </Button>{" "}
        </div>
        <Alert
          variant="success"
          show={showAlert}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          Thanks for shopping with us!.
        </Alert>
      </Modal>
      <ToastContainer theme="colored" />
    </>
  );
}

export default Cart;
