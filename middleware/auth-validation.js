const validation=(Schema)=>async(req,resizeBy,next)=>{
    try {
        const parsebody=await Schema.parseAsync(req.body);
        req.body=parsebody;
        next();

    } catch (error) {
        resizeBy.status(400).json({message:"validation page error",errors:error.errors,});
    }
};

module.exports=validation