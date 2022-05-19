import Expenses from "./conponents/Expenses/Expenses";
import NewExpense from "./conponents/NewExpense/NewExpense";
import react, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Grocery Shopping",
    amount: 91.54,
    date: new Date(2022, 3, 14),
  },
  {
    id: "e2",
    title: "Rent",
    amount: 1294.12,
    date: new Date(2022, 1, 14),
  },
  { id: "e3", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e5",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e6",
    title: "New TV ",
    amount: 799.9,
    date: new Date(2020, 1, 22),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
