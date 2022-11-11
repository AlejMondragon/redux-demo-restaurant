import { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../Cart/CartItem";
import classes from "./Checkout.module.css"

const Checkout = () => {
  const [inputs, setInputs] = useState({});
  const cartItemsData = useSelector((state) => state.cart.items)
  const cartTotalData = useSelector((state) => state.cart.totalAmount)
  const cartTotal = cartTotalData.toFixed(2)

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartItemsData.map(item => (
        <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        component={"checkout"}
        />
      ))}
    </ul>
  )

  const inputsHandler = (event) => {
    const {name, value} = event.target;
    const input = {[name]: value};
    setInputs({...inputs, ...input})
  }

  const submitHandler = (event) => {
    event.preventDefault();

    setInputs({})
  }

  return (
    <section className={classes.checkout}>
        <div>
          <h1>Your Order</h1>
          {cartItems}
          <h3>Total: ${cartTotal}</h3>
        </div>
        <div>
          <h1>Personal Information</h1>
          <form className={classes.form} onSubmit={submitHandler} >
            <input placeholder="Name" name="name" onChange={inputsHandler} required/>
            <input placeholder="Address (street#, street name, city)" name="address" onChange={inputsHandler} required/>
            <input placeholder="Postal code" name="postal" onChange={inputsHandler} required/>
            <input placeholder="Phone no." name="phone" onChange={inputsHandler} required/>
            <input placeholder="E-mail" name="email" onChange={inputsHandler} />
            <div className={classes.buttons}>
              <button type="reset" className={classes.clear}>Clear</button>
              <button type="submit" className={classes.submit}>Order</button>
            </div>
          </form>
        </div>
    </section>
  );
};

export default Checkout;
