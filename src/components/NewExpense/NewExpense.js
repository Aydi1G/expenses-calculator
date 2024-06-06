import "./NewExpense.css";
import Overlay from "../overlay/Overlay";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [toggler, setToggler] = useState(false);
  const [toggler2, setToggler2] = useState(false);
  const toggleHandler = () => {
    setToggler((preToggler) => {
      return !preToggler;
    });
  };
  const showOverlay = () => {
    setToggler2((preToggler2) => {
      return !preToggler2;
    });
  };

  return (
    <div className="new-expense">
      {toggler2 && <Overlay onClick={showOverlay} />}
      {toggler ? (
        <ExpenseForm onSaveData={props.onSaveData} onToggle={toggleHandler} />
      ) : (
        <div>
          <button onClick={toggleHandler}>new expense</button>
          <button onClick={showOverlay}>show overlay</button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
