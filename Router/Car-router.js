const express=require('express');
const Router=express.Router();
const controller=require('../Controller/Car-controller')
const validation=require('../middleware/auth-validation')

const carSchema=require('../zod/CarSchema')
Router.route("/carss").get(controller.carss);
Router.route("/cars").get(controller.cars);
Router.route("/addcar").post(validation(carSchema),controller.addCar);
Router.route("/cars/:id").put(validation(carSchema),controller.updatedcar);
Router.route("/cars/:id").delete(controller.deletedcar);
Router.route("/cars/:id/status").put(controller.updateCarStatus);

module.exports=Router;