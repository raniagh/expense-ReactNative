import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useExpense } from "../store/context/ExpenseContext";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const expensesCtx = useExpense();
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      periodName="Last 7 Days"
      fallBackText="No expenses registered for the last 7 days"
    />
  );
}

export default RecentExpenses;
