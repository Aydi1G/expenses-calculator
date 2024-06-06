import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const selectingHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="filter-container">
      <div>
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectingHandler}>
          <option value="all">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
