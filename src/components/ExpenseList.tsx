import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

const ExpenseList = () => {
    const { state } = useBudget()
    const filteredExpenses = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses
    const isEmpty = useMemo(() => filteredExpenses.length === 0, [filteredExpenses])
    
    return (
        <div className="mt-10">
            {isEmpty ? (
                <p className="text-gray-600 text-2xl text-center font-bold">
                    No hay gastos registrados
                </p>
            ) : (
                <>
                    <p className="text-gray-600 text-2xl text-center font-bold my-5">
                        Listado de gastos
                    </p>

                    <div className="bg-white shadow-lg rounded-lg">
                        {filteredExpenses.map(expense => (
                            <ExpenseDetail 
                                key={expense.id}
                                expense={expense}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default ExpenseList