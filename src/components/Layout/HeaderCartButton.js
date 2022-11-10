import { useSelector } from "react-redux"
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  
  return (
      <button className={classes.btn} onClick={props.onShowCart}>
        <span className={classes.icon}>
          <CartIcon/>
        </span>
        <div>
          <p>{totalQuantity}</p>
        </div>
      </button>
  )
}

export default HeaderCartButton