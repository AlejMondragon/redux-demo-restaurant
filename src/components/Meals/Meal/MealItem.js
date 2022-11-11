import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/slices/cart-slice";
import Card from "../../UI/Card";
import MealForm from "./MealForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const dispatch = useDispatch()

  const {id, name, price} = props

  const addItemHandler = (quantity) => {

    dispatch(cartActions.addItem({id, name, price, quantity}))
  }

  return (
    <Card>
    <li className={classes.container}>
      <div className={classes.meal}>
        <h3 className={classes.name}>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <h4 className={classes.price}>${props.price}</h4>
      </div>
      <div>
        <MealForm id={props.id} onAddItem={addItemHandler} />
      </div>
    </li>
    </Card>
  );
};

export default MealItem;
