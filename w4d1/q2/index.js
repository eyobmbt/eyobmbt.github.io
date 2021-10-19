
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded());
const session=require('express-session');
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:'salt for cookie signing'
}));
app.get('/',(req,res)=>{
 let  form=`Welcome  ${req.session.name} and Your age is: ${req.session.age}`;
    form+=`<form action="/result" method="post">
    Name: <input name="name">
    Age: <input name="age"> <button type="submit">
    Submit</button></form>`;
    res.send(form);
});
 app.post('/result',(req,res)=>{
    let name = req.body.name;
     let age=req.body.age;
     req.session.name=name;
     req.session.age=age;
 
   res.redirect(303,"/");
    
 });
app.listen(3006);
