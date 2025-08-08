const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://utkarshbw:Utkarsh420@cluster0.te2ejg1.mongodb.net/")

const signupSchema=new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    FirstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    LastName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    Password:{
        type:String,
        required:true,
        minLength:6
    }
});

const accountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
});
const users=mongoose.model("Users",signupSchema)
const account=mongoose.model("Account",accountSchema)
module.exports=({users,account})