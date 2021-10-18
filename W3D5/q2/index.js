/*GET and POST: In your q2 directory be sure to start with npm init and install express. Your
index.js application for this exercise should return a form similar to what is shown below for
GET requests to ‘/’.
The form should submit with method POST to “/result”, and then output a simple string similar
to the output of question1. Hint: you’ll need to use the express.urlencoded middleware so that
the post parameters are parsed on req.body.
Return output after POST (don’t redirect yet in this exercise). Try and see what happens when
you bookmark the result page (and then use the bookmark).*/
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded());
app.get('/',(req,res)=>{
    let form=req.query.form;
     form=`<form action="/result" method="post">
    Name: <input name="name">
    Age: <input name="age"> <button type="submit">
    Submit</button></form>`;
    res.send(form);
});
 app.post('/result',(req,res)=>{
    let name = req.body.name;
     let age=req.body.age;
    res.send(`Welcome ${name} and Your age is: ${age}`);
    
 });
app.listen(3006);
