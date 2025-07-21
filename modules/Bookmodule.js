const mongoose=require('mongoose');

const BookSchema=new mongoose.Schema({
 car: { type: mongoose.Schema.Types.ObjectId, ref: "Cars", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },

  location: { type: String, required: true },
  username: { type: String, required: true },
  title: { type: String, required: true },

  email: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  driverRequired: { type: Boolean, default: false },
  paymentMethod: { type: String, enum: ['Cash'], default: 'Cash' },

  pickupDate: { type: Date, required: true },
  dropoffDate: { type: Date, required: true },

  price: { type: Number },
  seat: { type: Number, required: true },

  image: { type: String }, 

  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Cancelled'],
    default: 'Pending'
  }
}, { timestamps: true });;

const Bookmodule=new mongoose.model("Booking",BookSchema);

module.exports=Bookmodule;