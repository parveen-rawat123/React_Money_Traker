const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const bodyparser = require('body-parser')
app.use(cors())
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/demo',(req,res)=>{
   console.log(req.body)
   res.send(req.body)
   
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
