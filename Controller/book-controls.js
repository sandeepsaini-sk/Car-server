const Bookmodule=require('../modules/Bookmodule')

const books=(req,res)=>{
    res.json({message:"Booking page "})
}

const booking=async(req,res)=>{
    try {
        const data=req.body;
        const newbooking=await Bookmodule.create(data);
        res.status(200).json({message:" your car booking successfully",booking:newbooking})
    } catch (error) {
        res.status(500).json({message:"booking page post error",error:error})
    }
}

const bookings=async(req,res)=>{
    try {
        const bookings=await Bookmodule.find();
        res.status(200).json({message:"all booking this car",bookings:bookings})
    } catch (error) {
       res.status(500).json({message:"booking page get error",error:error}) 
    }
}

const getuserbooking=async(req,res)=>{
    try {
        const {userId}=req.params;
        const booking=await Bookmodule.find({userId}).sort({ createdAt: -1 });;
       if(booking.length===0){
        return res.status(404).json({meassage:"no booking found"})
       }
        return res.status(200).json({message:"your booking fetched successfully",booking:booking})
    } catch (error) {
          res.status(500).json({message:"booking page get user error",error:error}) 
    }
}

const updatebookstatus=async(req,res)=>{
    try {
        const{id}=req.params;
        const{status}=req.body;
        const updated=await Bookmodule.findByIdAndUpdate(id,{status},{new:true,});

        if(!updated){
            return res.status(400).json({message:"Booking not found"})
        }

        res.status(200).json({message:"booking status update successfully ",updatestatus:updated})

    } catch (error) {
        res.status(500).json({message:"booking page status error",error:error})
    }
}
module.exports={books,booking,bookings,getuserbooking,updatebookstatus}