const ExpenseSchema = require("../models/expensemodel")


exports.addExpense = async (req, res) => {
   const { title, amout, category, description, date } = req.body;
   const income = ExpenseSchema({
      title,
      amout,
      category,
      description,
      date
   })
   console.log(income)
   try {
      if (!title || !category || !description || !date) {
         return res.status(400).json({ error: 'All field is required' });
      };
      if (amout <= 0 || !amout === 'number') {
         return res.status(400).json({ error: 'Amout must be positive number' })
      };
      const result = await income.save()
      res.status(200).json({ message: 'expense added' })
      console.log(result)
      consol.log(income)
   } catch (error) {
      res.status(500).json({ error: 'server error from add expense' });
      consol.log(`post expense route error${error}`)
   }
};


exports.getExpense= async (req, res) => {
   try {
      const incomes = await ExpenseSchema.find().sort({ createdAt: -1 });
      res.status(200).json(incomes)
   } catch (error) {
      res.status(500).json({ error: 'server error from get expense' });
   }
}

exports.deleteExpense = async (req, res) => {
   const { id } = req.params;
   console.log(req.params);
   ExpenseSchema.findByIdAndDelete(id)
      .then((income) => {
         res.status(200).json({ messagem: 'expense deleted' })
      })
      .catch((error) => {
         res.status(500).json({ error: 'server error from delete expense' })
      })

}