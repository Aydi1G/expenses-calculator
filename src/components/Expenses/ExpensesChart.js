import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const dataPoints2 = [
    { label: "Jan", values: 0 },
    { label: "Feb", values: 0 },
    { label: "Mar", values: 0 },
    { label: "Apr", values: 0 },
    { label: "May", values: 0 },
    { label: "Jun", values: 0 },
    { label: "Jul", values: 0 },
    { label: "Aug", values: 0 },
    { label: "Sep", values: 0 },
    { label: "Oct", values: 0 },
    { label: "Nov", values: 0 },
    { label: "Dec", values: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    dataPoints2[expenseMonth].values += expense.price;
  }
  return <Chart dataPoints={dataPoints2} />;
};

export default ExpensesChart;
