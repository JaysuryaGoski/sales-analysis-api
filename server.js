const express = require('express')
const app = express()
const port = 8080

//loading json files
const addresses = require('./data/address.json')
const orders = require('./data/order.json')

app.use('/',require('./src/routes/index.js'))

app.use(express.json())

app.listen(port ,()=>{
    console.log(`Server is listening at port: ${port}`);
})
