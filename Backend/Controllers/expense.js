const ExpenseSchema = require("../models/expensemodel");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  const expense = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });
  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ error: "All field is required" });
    }
    if (amount <= 0 || !amount === "number") {
      return res.status(400).json({ error: "Amout must be positive number" });
    } 
    const result = await expense.save();
    res.status(200).json({ message: "Expense Added", result});
  } catch (error) {
    res.status(500).json({ error: "server error from add expense" });
  }
};


exports.getExpense = async (req, res) => {
  try {
    const incomes = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ error: "server error from get expense" });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    let deleteExpense = await ExpenseSchema.findByIdAndDelete(id);
    if (!deleteExpense) {
      res.status(401).json({ error: "Expense not deleted" });
    }
    res.status(200).json({ message: "Expense Deleted" });
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};
