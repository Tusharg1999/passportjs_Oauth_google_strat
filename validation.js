const validation=require('@hapi/joi')
module.exports=function(data){
    const validationSchema={
        email:validation.string().min(6).required().email(),
        password:validation.string().min(6).required()
    }
    return validation.validate(data,validationSchema)
}