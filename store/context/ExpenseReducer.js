const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE_EXPENSE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "REMOVE_EXPENSE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

export default ExpenseReducer;
