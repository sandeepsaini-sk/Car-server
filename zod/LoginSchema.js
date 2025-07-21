const {z}=require('zod');

const LoginSchema=z.object({
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid Email address"}),
    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(6,{message:"Password must be at least of 6 char"})
    .max(30,{message:"Password must not be more then 30 char"}),
  

})

module.exports=LoginSchema