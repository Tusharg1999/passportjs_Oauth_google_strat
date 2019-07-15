const express=require('express')
const app=express()
const passport=require('passport')
const mongoose=require('mongoose')
const local=require('./passport')

const db=require('./key').DB_CONNECT
mongoose.connect(db,{ useNewUrlParser: true })
.then(console.log('database connected'))

const PORT=process.env.PORT || 5000
app.listen(PORT)