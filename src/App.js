import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import Header from "./components/Expenses/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Expenses id="workArea" />
    </div>
  );
}

export default App;
