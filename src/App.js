import { useState } from "react";
import Expenses from "./componets/Expenses/Expenses";
import NewExpenses from "./componets/NewExpenses/NewExpenses";

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

function App() {

const [expenses, setExpenses] = useState(DUMMY_EXPENSE)
  const addExpenseHandler = expense => {
    // console.log(expense)
    setExpenses((prev) => {
      return [ expense, ...prev]
    })
  }
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />

    </div>
  );
}

export default App;
