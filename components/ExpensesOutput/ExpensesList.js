import { StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";
import { FlatList } from "react-native";

function renerExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renerExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}
export default ExpensesList;

const styles = StyleSheet.create({});
