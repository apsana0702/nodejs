const express = require('express')
const path = require('path')
const app = express()
app.set('views',path.join(__dirname,'views'))
app.set('view engine','mustache')
app.engine('mustache',require('hogan-middleware').__express)
app.get('/home',(req,res,next)=>{
    res.render('home',null)
})
app.listen(8080)