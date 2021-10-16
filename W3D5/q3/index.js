
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const path=require('path');
app.use(bodyParser.urlencoded());
app.use('/css', express.static(path.join(__dirname, 'css')));
const date_ob = new Date();
const hour = date_ob.getHours();
app.get('/',(req,res)=>{
    let href='css/night.css';
    if(hour>=6 && hour<=18){
        href='css/day.css';
    }
    let form=req.query.form;
     form=`
     <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <link href="${href}" rel="stylesheet"/>
        <title>W3D5 Assignment</title>

    </head>
    <body>
        <h2>W3D5 Assignment-Express Get/Post form</h2>
        <h2>Day: ${date_ob} Hour: ${hour}</h2>
     <form action="/result" method="post">
    Name: <input name="name">
    Age: <input name="age"> <button type="submit">
    Submit</button></form>
    </body>
    </html>`;
    res.send(form);
});


 app.post('/result',(req,res)=>{

    let name = req.body.name;
     let age=req.body.age;

    res.send(`Welcome ${name} and Your age is: ${age} `);
    
 });
app.listen(3004);
