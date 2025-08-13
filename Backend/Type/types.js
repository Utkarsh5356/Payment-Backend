const zod=require('zod')
const mongoose=require('mongoose')
const addUser=zod.object({
    UserName:zod.email(),
    FirstName:zod.string(),
    LastName:zod.string(),
    Password:zod.string()
})
const checkUser=zod.object({
    UserName:zod.email(),
    Password:zod.string()
})
const updateUser=zod.object({
    FirstName:zod.string().optional(),
    LastName:zod.string().optional(),
    Password:zod.string().optional()
})
const transfer=zod.object({ 
  amount:zod.string(),
  to:zod.string().refine((val)=>{
    return mongoose.Types.ObjectId.isValid(val)
  }),
})
module.exports=({addUser,checkUser,updateUser,transfer})