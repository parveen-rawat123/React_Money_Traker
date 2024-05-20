const IncomeSchema = require("../models/incomemodel")


exports.addIncome = async (req, res) => {
   const { title, amout, category, description, date } = req.body;
   const income = IncomeSchema({
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
      res.status(200).json({ message: 'Income added' })
      console.log(result)
      consol.log(income)
   } catch (error) {
      res.status(500).json({ error: 'server error from add income' });
      consol.log(`post income route error${error}`)
   }
};


exports.getIncome = async (req, res) => {
   try {
      const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
      res.status(200).json(incomes)
   } catch (error) {
      res.status(500).json({ error: 'server error from get income' });
   }
}

exports.deleteIncome = async (req, res) => {
   const { id } = req.params;
   console.log(req.params);
   IncomeSchema.findByIdAndDelete(id)
      .then((income) => {
         res.status(200).json({ messagem: 'income deleted' })
      })
      .catch((error) => {
         res.status(500).json({ error: 'server error from delete incom' })
      })

}