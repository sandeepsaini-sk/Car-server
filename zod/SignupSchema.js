const {z}=require('zod');

const SignupSchema=z.object({
    username:z
    .string({required_error:"Username is required"})
    .trim()
    .min(3,{message:"Username must be at least of 3 char"})
    .max(255,{message:"Username must not be more then 255 char"}),
    phone:z
    .string({required_error:"Phone no. is required"})
    .trim()
    .min(10,{message:"Phone no. must be at least of 10 char"})
    .max(12,{message:"Phone no. must not be more then 12 char"}),
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

module.exports=SignupSchema