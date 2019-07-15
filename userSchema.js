const mongoose=require('mongoose')
const userScherma=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const user=mongoose.model('users',userScherma)
module.exports=user