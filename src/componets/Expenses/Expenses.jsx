import React, { useState } from 'react'
import "./Expenses.css"
import ExpensesFilter from '../Expenses/ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../../UI/Card';
function Expenses({ expenses }) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expenses.length === 0 && <p>No Expenses found.</p>}
            {expenses.length > 0 && (
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