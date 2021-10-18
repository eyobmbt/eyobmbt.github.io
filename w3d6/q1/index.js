const express=require('express');
const path=require('path');
const app=express();
app.use('/css', express.static(path.join(__dirname, 'css')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));

app.get('/',(req,res)=>{
    let myCss="css/night.css";
    const date=new Date();
    hour=date.getHours();
    if(hour>=6 && hour<=18){
        myCss='css/day.css';
    }
    res.render("index",
    {
     time:date.toTimeString(),
     myCss:myCss
    });
});
app.listen(3007);