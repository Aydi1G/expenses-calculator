import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.mydate.toLocaleString("en-us", { month: "long" });
  const day = props.mydate.toLocaleString("en-us", { day: "2-digit" });
  const year = props.mydate.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
