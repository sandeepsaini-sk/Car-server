const mongoose=require('mongoose');

const URL=process.env.MONGODB_URL;

const connectdb=async()=>{
try {
    await mongoose.connect(URL)
    console.log("database connection successfully")
} catch (error) {
    console.log("database connection failed")
}
}

module.exports=connectdb