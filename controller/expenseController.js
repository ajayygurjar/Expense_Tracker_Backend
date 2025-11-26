const Expense = require("../models/Expense");

// Create
exports.createExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read all
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll({ order: [["createdAt", "DESC"]] });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete
exports.deleteExpense = async (req, res) => {
  try {
    await Expense.destroy({ where: { id: req.params.id } });
    res.json({ message: "Expense deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
exports.updateExpense = async (req, res) => {
  try {
    await Expense.update(req.body, { where: { id: req.params.id } });
    const updatedExpense = await Expense.findByPk(req.params.id);
    res.json(updatedExpense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
