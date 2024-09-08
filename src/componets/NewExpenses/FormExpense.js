import { useState } from "react"
import "./FormExpense.css"
const FormExpense = () => {
    const [inputValue, setInputValue] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    })

    const handleChangeTitle = (e) => {
        setInputValue((prev) => {
            return {
                ...prev,
                enteredTitle: e.target.value
            }
        })
    }

    const handleChangeAmount = (e) => {
        setInputValue((prev) => {
            return {
                ...prev,
                enteredAmount: e.target.value
            }
        })
    }

    const handleChangeDate = (e) => {
        setInputValue((prev) => {
            return {
                ...prev,
                enteredDate: e.target.value
            }
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        const body = {
            title: inputValue.enteredTitle,
            amount: inputValue.enteredAmount,
            date: new Date(inputValue.enteredDate)
        }
        console.log(body)
        setInputValue({
            enteredAmount: "",
            enteredDate: "",
            enteredTitle: ""
        })
    }
    return <form onSubmit={handleSubmitForm}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input value={inputValue.enteredTitle} type="text" onChange={handleChangeTitle} />
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input value={inputValue.enteredAmount} type="number" min="0.01" step="0.01" onChange={handleChangeAmount} />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={inputValue.enteredDate} min="2019-05-15" max="2-2-2024" onChange={handleChangeDate} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">
                Add Expense
            </button>
        </div>
    </form>
}

export default FormExpense