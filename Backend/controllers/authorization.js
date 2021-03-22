const mysql=require('mysql');

const {createConnection} =require('mysql')
const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Durban@28',
  database: 'register',

})


exports.register=(req,res) => {
    console.log(req.body);
   const{username,email,password,confirmpassword}=req.body;

db.query('Select email from register where email=?',[email],(error,results)=>{
    if(error)
    {
        console.log("error");
    }
    if(results.length>0){
        return res.render('register',{
            message:'Mail already in use'
        })
    }else if(password!==confirmpassword){
        return res.render('register',{
            message:'password does not match'
        })
    }
}) 
res.send("Form submitted")
}