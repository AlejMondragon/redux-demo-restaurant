import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import CartItem from "../Cart/CartItem";
import classes from "./Checkout.module.css"

const Checkout = () => {
  const cartItemsData = useSelector((state) => state.cart.items)
  const cartTotalData = useSelector((state) => state.cart.totalAmount)
  const cartTotal = cartTotalData.toFixed(2)

  // make a different component for each item, here we have a problem when rendering the component,
  // it will call our functions in loop (we can't call functions here)
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartItemsData.map(item => (
        <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        quantity={item.quantity} 
        />
      ))}
    </ul>
  )

  // ** CREATING DYNAMIC INPUTS **

  // 1) I initialize a state as an object where I'll store my inputs
  const [inputs, setInputs] = useState({});


  // 2) Then, I create a inputs function handler that will take care of filling my state object
  const inputsHandler = (event) => {

    // 3) destructuring my event object to access the values I'll use
    const {name, value} = event.target;
    // 4) everytime this function is called, it wil access it's own element values, which
    //    we want to store as an object.
    const input = {[name]: value};
    // 5) Now, we can store it in our state. To also keep the old data we use spread operator
    setInputs({...inputs, ...input})
  }

  const submitHandler = (event) => {
    event.preventDefault();

    setInputs({})
  }

  return (
    <section className={classes.checkout}>
      {/* <Card> */}
        <div>
          <h1>Your Order</h1>
          {cartItems}
          <h3>Total: ${cartTotal}</h3>
        </div>
        <div>
          <h1>Personal Information</h1>
          <form onSubmit={submitHandler} >
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
      {/* </Card> */}
    </section>
  );
};

export default Checkout;
