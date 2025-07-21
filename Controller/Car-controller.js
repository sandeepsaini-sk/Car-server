const CarModule=require('../modules/Carmodule')
const mongoose = require("mongoose");


const carss=(req,res)=>{
    res.send("cars is cars")
}
const cars=async(req,res)=>{
try {
    const cars=await CarModule.find();
    res.status(200).json({message:"cars in this", cars:cars})
} catch (error) {
    res.status(404).json({msg:"cars get page error"})
}
}

const addCar=async(req,res)=>{
    try {
        const addcar=req.body;
        const {title}=req.body;
        const carexist=await CarModule.findOne({title})
         
        if(carexist){
            return res.status(404).json({message:"Car already name (title) exists"})
        }

        const newcar=await CarModule.create(addcar)
        return res.status(200).json({message:"car add successfully ",car:newcar})
    } catch (error) {
      res.status(404).json({msg:"cars add page error"})  
    }
}

const updatedcar=async(req,res)=>{
    try {
        const {id}=req.params;
         
         if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid car ID" });
    }

        console.log(req.params);
        const updatedata=req.body;

        const updatecar= await CarModule.findByIdAndUpdate(id,updatedata,{new:true});

        if(!updatecar){
            return res.status(404).json({message:"car not found"});
        }
        
        res.status(200).json({message:"Car updated successfuly",car:updatecar})
        
    } catch (error) {
        res.status(500).json({msg:"cars edit page error"})  
    }
}

const deletedcar=async(req,res)=>{
try {
    const {id}=req.params;

     if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid car ID" });
    }
    
    const deletedCar=await CarModule.findByIdAndDelete(id);

    if(!deletedCar){
        return res.status(404).json({message:"car not found"});
    }

    res.status(200).json({message:"Car deleted successfully"});
} catch (error) {
    res.status(500).json({msg:"cars delete page error"}) 
}
}
const updateCarStatus=async(req,res)=>{
    const {id}=req.params;
    const {status}=req.body;
    try {
        const car=await CarModule.findByIdAndUpdate(id,{status},{new:true});
        res.status(200).json({message:"Car status updated",car:car})
    } catch (error) {
        res.status(500).json({message:"Car status update failed",cars:car})
    }
}

module.exports={carss,cars,addCar,updatedcar,deletedcar,updateCarStatus}