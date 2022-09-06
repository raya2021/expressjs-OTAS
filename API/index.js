const express = require('express')
const app =express();
app.use(express.json());



app.get('/age/:year', function (req, res) {
    var year = parseInt(req.params.year)
    var age= (2022 - year).toString()
    res.send('Your age is:'+""+age)
  })

const port =process.env.PORT || 3000;
app.listen(port,()=>console.log(`this server on ${port}...`));