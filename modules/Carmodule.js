const mongoose=require('mongoose');

const CarShema=new mongoose.Schema({
 title: {type: String,required: true,trim: true},
 image: {type: String,required: true},
  brand: {type: String,required: true,trim: true},
  oil: {type: String,enum: ['petrol', 'diesel', 'gas', 'electric'], required: true},
  type: { type: String, enum: ['Manual', 'Automatic'],required: true},
  seat: {type: Number,required: true},
  status: {type: String,enum: ['available', 'unavailable'],default: 'available'},
  price: {type: Number,required: true}
});


const CarModule=new mongoose.model("Cars",CarShema);

module.exports=CarModule;