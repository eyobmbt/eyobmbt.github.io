
const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));

app.get('/',(req,res)=>{

    res.render("index");
});
 app.post('/result',(req,res)=>{
    let name = req.body.name;
   let   age=req.body.age;
    res.send(`Welcome ${name} and Your age is: ${age}`);
    
 });
app.listen(3001);