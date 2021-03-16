const express=require('express');
const authController=require('../controllers/authorization');
const router= express.Router();


router.get('/register',authController.register)

module.exports = router;