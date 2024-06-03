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
      if (!title || !category || !amount || !date || !description) {
       return  res.status(400).json({ error: 'All field is required' });
      }else{
         try{
            const result = await income.save()
            console.log("resultis",result)
            return res.status(200).json({ message: 'Income added'})
         } catch (error) {
            console.log(`post income route error ${error}`)
            return res.status(500).json({ error: 'server error from add income', error });
         }
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
   try {
      const { id } = req.params;
     let deleteIncome = await  IncomeSchema.findByIdAndDelete(id)     
     if(!deleteIncome){
        console.log("this is big error ",deleteIncome)
        res.status(404).json({ error : "Income not Deleted"})
      }
      res.status(201).json({ message : "Income  Deleted"})

   } catch (error) {
      res.status(500).json({error : "Income  not deleted", error})
      console.log(error)
   }   
}