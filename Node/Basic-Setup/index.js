const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello from get')
})
app.post('/', (req,res)=>{
    console.log(req.body);
    res.send('hello')
})

app.listen(3000,() => {
    console.log("Host is listening on 3000")
})