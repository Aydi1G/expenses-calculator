import "./ExpenseForm.css";
import { useState, useRef } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   price: "",
  //   date: "",
  // });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    //this is another way using object and overriding a value
    // setUserInput((preState) => {
    //   return {...preState , title: event.target.value};
    // });
  };
  const priceChangeHandler = (event) => {
    // setEnteredPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
  };
  const sumbitHandler = (event) => {
    event.preventDefault(); //do not refresh the page

    const expenseData = {
      title: titleRef.current.value,
      price: priceRef.current.value,
      date: new Date(dateRef.current.value),
      //for useState the 1st way
      // title: enteredTitle,
      // price: enteredPrice,
      // date: new Date(enteredDate),
    };

    props.onSaveData(expenseData);
    titleRef.current.value = "";
    priceRef.current.value = "";
    dateRef.current.value = "";
    //for useState the 1st way
    // setEnteredDate("");
    // setEnteredPrice("");
    // setEnteredTitle("");
  };

  const titleRef = useRef();
  const priceRef = useRef();
  const dateRef = useRef();

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // value={enteredTitle}
            onChange={titleChangeHandler}
            ref={titleRef}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            // value={enteredPrice}
            onChange={priceChangeHandler}
            ref={priceRef}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            // value={enteredDate}
            onChange={dateChangeHandler}
            ref={dateRef}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onToggle}>
          cancel
        </button>
        <button type="submit">new expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
