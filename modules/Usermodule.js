const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');
const USerSchema= new mongoose.Schema(
    {
        username:{type:String,required:true},
        email:{type:String,required:true},
        phone:{type:String,required:true},
        password:{type:String,required:true},
        isAdmin:{type:Boolean,default:false}
    }
);

USerSchema.pre('save',async function(next){
const User= this
console.log(User);

if(!User.isModified("password")){
    return next();
}
try {
    const saltRound=await bcrypt.genSalt(10);
    const hash_password=await bcrypt.hash(User.password,saltRound);
    User.password=hash_password;
    next();  
} catch (error) {
    console.log(error);
    res.status(400).json({msg:"this is bcrypt page error"})
    
}
})

USerSchema.methods.generateToken= async function(){
   try {
        return jwt.sign(
        {
           Userid:this._id.toString(),
           email:this.email,
           isAdmin:this.isAdmin,
        },
        process.env.JWT_TOKEN,
        {
            expiresIn:"7d"
        }
    )
    
   } catch (error) {
    console.log(error);
    res.status(400).json({msg:"this is jwt page error"})
   }
}

USerSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)
}


const USermodule= new mongoose.model('User',USerSchema);
module.exports=USermodule;