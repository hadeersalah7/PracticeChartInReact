import React from "react"
import "../NewExpenses/NewExpense.css"
import FormExpense from "./FormExpense"
import ExpenseDate from "../Expenses/ExpenseDate"
const NewExpenses = ({ onAddExpense }) => {
    const saveExpenseData = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        onAddExpense(expenseData)
        // console.log(expenseData)
    }
    return (
        <div className="new-expense">
            <FormExpense onSaveExpenseData={saveExpenseData} />
    </div>
)
}

export default NewExpenses