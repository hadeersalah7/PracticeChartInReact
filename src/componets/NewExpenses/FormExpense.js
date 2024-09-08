import "./FormExpense.css"
const FormExpense = () => {
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" />
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-05-15" max="2-2-2024" />
            </div>

            <div className="new-expense__actions" type="submit">
                Submit
            </div>
        </div>

    </form>
}

export default FormExpense