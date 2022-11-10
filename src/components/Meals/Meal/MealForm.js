import React, { useRef } from 'react';
import Input from '../../UI/Input'
import classes from './MealForm.module.css'

const MealForm = (props) => {
  const quantityInputRef = useRef()

    const onAddItemHandler = (event) => {
    event.preventDefault()

    const quantityInput = quantityInputRef.current.value
    const quantityInputNumber = +quantityInput;

    props.onAddItem(quantityInputNumber)  
  }

  return (
    <form className={classes.form} onSubmit={onAddItemHandler}>
      <Input
        ref={quantityInputRef}
        label="amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  )
}

export default MealForm