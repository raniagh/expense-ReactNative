import ExpenseReducer from "./ExpenseReducer";

const { createContext, useReducer, useContext } = require("react");

const expenseInitialState = {
  expenses: [],
  addExpense: ({ description, name, date }) => {},
  setExpenses: (expenses) => {},
  updateExpense: (id, { description, name, date }) => {},
  removeExpense: (id) => {},
};

const ExpenseContext = createContext(expenseInitialState);

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    ExpenseReducer,
    expenseInitialState.expenses
  );
  const addExpense = (expense) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const setExpenses = (expenses) => {
    dispatch({
      type: "SET",
      payload: expenses,
    });
  };

  const updateExpense = (id, expense) => {
    dispatch({
      type: "UPDATE_EXPENSE",
      payload: {
        id: id,
        data: expense,
      },
    });
  };
  const removeExpense = (id) => {
    dispatch({
      type: "REMOVE_EXPENSE",
      payload: id,
    });
  };
  value = {
    expenses: state,
    addExpense,
    setExpenses,
    updateExpense,
    removeExpense,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export const useExpense = () => useContext(ExpenseContext);
