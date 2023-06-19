import { useLayoutEffect } from "react";
import { View } from "react-native";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;

  //if editedExpenseId value exist so isEditing will get true as a value
  // !! convert a value to boolean
  const isEditing = !!editedExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return <View></View>;
}

export default ManageExpense;
