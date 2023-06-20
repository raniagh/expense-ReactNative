import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { useExpense } from "../store/context/ExpenseContext";
import { useDispatch } from "react-redux";
import {
  addExpense,
  removeExpense,
  updateExpense,
} from "../store/redux/expenses";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpense({ route, navigation }) {
  const expenseCtx = useExpense();
  //const dispatch = useDispatch();
  const editedExpenseId = route.params?.expenseId;

  //if editedExpenseId value exist so isEditing will get true as a value
  // !! convert a value to boolean
  const isEditing = !!editedExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteHandler() {
    expenseCtx.removeExpense(editedExpenseId);
    //dispatch(removeExpense(editedExpenseId));
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, {
        description: "test!!",
        amount: 15.23,
        date: new Date("2022-05-26"),
      });
      /*  dispatch(
        updateExpense({
          id: editedExpenseId,
          data: {
            description: "test!!",
            amount: 15.23,
            date: new Date("2022-05-26"),
          },
        })
      ); */
    } else {
      expenseCtx.addExpense({
        description: "test",
        amount: 12.23,
        date: new Date("2022-05-13"),
      });
      /*  dispatch(
        addExpense({
          description: "test",
          amount: 12.23,
          date: new Date("2022-05-13"),
        })
      ); */
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
