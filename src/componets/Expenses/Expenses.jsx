import React, { useState } from 'react'
import "./Expenses.css"
import ExpensesFilter from '../Expenses/ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../../UI/Card';
import ExpenseChart from './ExpenseChart';
function Expenses({ expenses }) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    
    const fiteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseChart expenses={fiteredExpenses} />
            {fiteredExpenses.length === 0 && <p
                style={{ color: "#fff", textAlign: "center", fontSize: "17px", fontWeight: "700"}}>
                No Expenses found.</p>}
            {fiteredExpenses.length > 0 && (
                expenses.map(expense =>
                <ExpenseItem key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />)
            )}
            
        </Card>
    )
}

export default Expenses