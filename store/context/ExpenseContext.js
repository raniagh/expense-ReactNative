import ExpenseReducer from "./ExpenseReducer";

const { createContext, useReducer, useContext } = require("react");

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2022-02-18"),
  },
];

const expenseInitialState = {
  expenses: DUMMY_EXPENSES,
  addExpense: ({ description, name, date }) => {},
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
    updateExpense,
    removeExpense,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export const useExpense = () => useContext(ExpenseContext);
