import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MealItem from './Meal/MealItem';
import classes from './Meals.module.css'
import { useDispatch } from "react-redux";
import { getMeals } from '../../store/slices/meals-slice';

const Meals = () => {
  const dispatch = useDispatch();
  const { meals, status, statusMessage } = useSelector((state) => state.meals)

  useEffect(() => {
    dispatch(getMeals())
  }, [dispatch])

  const mealsList = meals.map((meal) => (

    <MealItem
    key={meal.id}
    id={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
    />
    ));

  return (
    <section className={classes.mealsList}>
        {status === 'pending' && <h1 style={{textAlign: "center"}}>Loading...</h1>}
        {status === 'rejected' && <h1 style={{textAlign: "center"}}>{statusMessage}</h1>}
        {status === 'fulfilled' && <ul>{mealsList}</ul>}
    </section>
  );
};

export default Meals
