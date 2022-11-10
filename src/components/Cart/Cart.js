import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import Modal from "../UI/Modal"
import CartItem from "./CartItem"
import classes from './Cart.module.css'

const Cart = (props) => {

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
        />
      ))}
    </ul>
  )

  return (
    <Modal onHideModal={props.onHideCart}>
      {cartItemsData.length > 0 ? cartItems : <p>Cart is empty</p>}
      <div className={classes["cart-footer"]}>
        <h3>Total: ${cartTotal}</h3>
        <div className={classes.buttons}>
          <button onClick={props.onHideCart}>Close</button>
          {cartItemsData.length > 0 ? <NavLink to="/checkout" onClick={props.onHideCart}><button>Checkout</button></NavLink> : ''}
        </div>
      </div>
    </Modal>
  )
}

export default Cart