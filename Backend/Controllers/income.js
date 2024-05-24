const IncomeSchema = require("../models/incomemodel")


exports.addIncome = async (req, res) => {
   const { title, amount, category, description, date } = req.body;
   const income = IncomeSchema({
      title,
      amount,
      category,
      description,
      date
   });
   console.log(income)
      if (!title || !category || !description || !date) {
        return  res.status(400).json({ error: 'All field is required' });
      };
      // if (amount <= 0 || typeof amount !== 'number') {
      //  return  res.status(401).json({ error: 'Amout must be positive number' })
      // };
     try{
      const result = await income.save()
      console.log("income is ",income)
      console.log("resultis",result)
       return res.status(200).json({ message: 'Income added' ,result})
   } catch (error) {
      consol.log(`post income route error${error}`)
     return res.status(500).json({ error: 'server error from add income', error });
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