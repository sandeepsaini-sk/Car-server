const express=require('express');
const Router=express.Router();
const controls=require("../Controller/Auth-controls");
const validation=require('../middleware/auth-validation');
const SignupSchema=require('../zod/SignupSchema')
const LoginSchema=require('../zod/LoginSchema')

Router.route('/').get(controls.home);
Router.route('/signin').post(validation(SignupSchema),controls.signin);
Router.route('/login').post(validation(LoginSchema),controls.login);
Router.route('/alluser').get(controls.alluser);
Router.route('/user/:id').put(controls.updateuser);
Router.route('/user/:id').delete(controls.deleteuser);

module.exports=Router