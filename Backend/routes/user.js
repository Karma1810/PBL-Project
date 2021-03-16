const express=require('express');
const router= express.Router();


router.get('/',(req,res)=>{
    res.render('Homepage');
})

router.get('/Login_register-page',(req,res)=>{
    res.render("Login_register-page");
})

module.exports = router;