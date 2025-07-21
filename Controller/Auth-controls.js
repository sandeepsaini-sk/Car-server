const USermodule=require('../modules/Usermodule')

const home=(req,res)=>{
    res.send("sandeep")
    console.log("home page"); 
}

const signin=async(req,res)=>{
    const {username,email,phone,password,isAdmin}=req.body
    const data={username,email,phone,password,isAdmin}
    try {
        const Userexist=await USermodule.findOne({email})
        if(Userexist){
            return res.status(201).send("Email already existed")
        }
        const newuser= await USermodule.create(data)
        console.log(newuser);

        return res.status(200).json({
         message:"Registeration successfully",
         token:await newuser.generateToken(),
         userid:newuser._id.toString(),
         isAdmin:newuser.isAdmin,
         email:newuser.email,
         user:newuser.username,
        })

    } 
    catch (error) {
        res.status(400).json({message:"signin page error",errors:error.errors})
    }
}

const login=async(req,res)=>{
 const {email,password}=req.body;
 try {
    const Userexist=await USermodule.findOne({email})
    if(!Userexist){
        return res.status(400).json({message:"invalid information"})
    }

    const olduser =await Userexist.comparePassword(password);

    if(olduser){
        return res.status(200).json({
         message:"login successfully",
         token:await Userexist.generateToken(),
         userid:Userexist._id.toString(),
         isAdmin:Userexist.isAdmin,
         email:Userexist.email,
         username:Userexist.username,
        })
    }
    else{
        return res.status(400).json({message:"invalid email or password"})
    }

 } catch (error) {
   res.status(400).json({message:"login page error",errors:error.errors})
 }
}

const alluser=async(req,res)=>{
    try {
        const getuser=await USermodule.find();
        res.status(200).json({message:"this all user is",alluser:getuser})
        
    } catch (error) {
        res.status(500).json({message:"get user error"})
    }
}

const updateuser=async(req,res)=>{
try {
    const {id}=req.params;
    const update=req.body;

    const updateduser=await USermodule.findByIdAndUpdate(id,update,{new:true});
    if(!updateduser){
        return res.status(404).json({message:"user not found"})
    }
    res.status(200).json({message:"user updated successfully",updateuser:updateduser})
} catch (error) {
    res.status(500).json({message:"updateuser page error"})
}
}

const deleteuser=async(req,res)=>{
try {
    const {id}=req.params;

    const deleteduser=await USermodule.findByIdAndDelete(id);
    if(!deleteduser){
        return res.status(404).json({message:"user not found"})
    }
    res.status(200).json({message:"user deleted successfully",deleteuser:deleteduser})
} catch (error) {
    res.status(500).json({message:"deleteuser page error"})
}
}

module.exports={home,signin,login,alluser,updateuser,deleteuser}