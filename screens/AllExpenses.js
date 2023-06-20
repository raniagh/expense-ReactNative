import { useSelector } from "react-redux";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useExpense } from "../store/context/ExpenseContext";

function AllExpenses() {
  const expensesCtx = useExpense();
  const expenses = expensesCtx.expenses;

  //const expenses = useSelector((state) => state.expense);

  return (
    <ExpensesOutput
      expenses={expenses}
      periodName="total"
      fallBackText="No registered expenses found"
    />
  );
}

export default AllExpenses;
