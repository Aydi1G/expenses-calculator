import { useState } from "react";
import Card from "../UI/Card";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const expensess = [
  {
    id: 1,
    title: "first one",
    date: new Date(2021, 9, 28),
    price: 57,
  },
  {
    id: 2,
    title: "second one",
    date: new Date(2021, 5, 18),
    price: 87,
  },
  { id: 3, title: "3rd one", date: new Date(2019, 7, 28), price: 46 },
  {
    id: 4,
    title: "4th one",
    date: new Date(2020, 2, 28),
    price: 156,
  },
];

const Expenses = (props) => {
  const [items, setItems] = useState(expensess);
  const [filteredYear, setFilteredYear] = useState("all");

  const onSaveDataHandler = (expenseData) => {
    setItems((currItems) => {
      return [expenseData, ...currItems];
    });
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = items.filter((expense) => {
    return (
      expense.date.getFullYear().toString() === filteredYear ||
      filteredYear === "all"
    );
  });

  let filteredContent = <p>no data found</p>;
  if (filteredItems.length > 0) {
    filteredContent = filteredItems.map((item) => {
      return <ExpenseItem key={item.id} data={item} />;
    });
  }

  return (
    <div id={props.id}>
      <Card>
        <NewExpense onSaveData={onSaveDataHandler} />
        <div className="container">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesChart expenses={filteredItems} />
          {filteredContent}
        </div>
      </Card>
    </div>
  );
};

export default Expenses;
