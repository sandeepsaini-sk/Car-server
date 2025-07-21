const express=require('express');
const Router=express.Router();
const controller=require('../Controller/book-controls');
const BookSchema=require('../zod/BookingSchema');
const validation=require('../middleware/auth-validation')
Router.route("/books").get(controller.books);
//create new booking
Router.route("/booking").post(validation(BookSchema),controller.booking);
//dashboard get all
Router.route("/getbooking").get(controller.bookings);
//user get all
Router.route("/booking/:userId").get(controller.getuserbooking);
//update 
Router.route("/bookings/:id").patch(controller.updatebookstatus);
module.exports=Router;