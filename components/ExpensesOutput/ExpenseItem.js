import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { Pressable } from "react-native";

function ExpenseItem({ description, date, price }) {
  return (
    <View style={styles.expenseItem}>
      <Pressable>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{date.toString()}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${price}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
