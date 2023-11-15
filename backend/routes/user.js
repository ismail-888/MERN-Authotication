const express=require('express')

// controller function
const {signupUser,loginUser}=require('../controllers/usercontroller')

const router=express.Router()

// login route
router.post('/login',loginUser)


// sign route
router.post('/signup',signupUser)


module.exports=router