import React, { useRef, useState } from "react";
import Input from "./Input";
import "./MealForm.css";

function MealForm(props) {
    const [ amountIsValid , setAmountIsValid] = useState(true)
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5) {
        setAmountIsValid(false)
        return;
    }

    props.onAddtoCart(enteredAmountNumber);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button> + Add</button>
      {!amountIsValid && <p>okey okey</p>}
    </form>
  );
}

export default MealForm;
