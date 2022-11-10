import { useDispatch } from "react-redux"
import { cartActions } from "../../store/slices/cart-slice"
import classes from "./CartItem.module.css"

const CartItem = (props) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem(
      {
        id: props.id, 
        name: props.name, 
        quantity: 1, 
        price: props.price
      }))
  }

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(props.id))
  }

  return (
    <li className={classes["cart-item"]}>
      <h3>{props.name}</h3>
      <p>/${props.price}</p>
      <div className={classes["quantity-details"]}>
        <div className={classes.quantity}>
          <p><strong>x {props.quantity}</strong></p>
        </div>
        <div className={classes["quantity-buttons"]}>
          <button onClick={addItemHandler}>+</button>
          <button onClick={removeItemHandler}>-</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem