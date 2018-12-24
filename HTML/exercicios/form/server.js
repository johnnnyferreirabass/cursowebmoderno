const express = require('express')
const app = express()
const boryParse = require('body-parser')

app.use(boryParse.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body);
    resp.send('<h1>Parabens</h1>')
})

app.listen(3003)