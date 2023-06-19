import { Text } from "react-native";
import { View } from "react-native";
import ExpenseItem from "../components/ExpenseItem";

function RecentExpenses() {
  return (
    <View>
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </View>
  );
}

export default RecentExpenses;
