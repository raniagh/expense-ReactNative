import { View, Text, StyleSheet } from "react-native";

function ExpenseItem() {
  return (
    <View style={styles.container}>
      <View>
        <Text>A book</Text>
        <Text>2022-2-19</Text>
      </View>
      <View style={styles.expensePrice}>
        <Text>14.99</Text>
      </View>
    </View>
  );
}
export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 8,
    margin: 16,
    backgroundColor: "purple",
    borderRadius: 4,
  },
  expensePrice: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
  },
});
