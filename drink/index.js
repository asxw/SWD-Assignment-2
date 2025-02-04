const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send('Hi Drink!')
})

app.listen(port, () =>{
    console.log(`Drink app is running at Port: ${port}`)
})